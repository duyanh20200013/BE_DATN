import { raw } from 'body-parser';
import db from '../models/index'
const { Op, where } = require("sequelize");
import teamService from './teamService'

let createFundSpend = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.FundSpend.create({
                teamId: teamId,
                time: data.time,
                amount: data.amount,
                description: data.description,
                type: data.type
            })
            resolve({
                errCode: 0,
                errMessage: "Create FundSpend Successfully!"
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteFundSpend = (teamId, fundSpendId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fundSpend = await db.FundSpend.findOne({
                where: {
                    teamId: teamId,
                    id: fundSpendId
                }
            })
            if (!fundSpend) {
                resolve({
                    errCode: 1,
                    errMessage: "FundSpend not Found!"
                })
            } else {
                await db.FundSpend.destroy({
                    where: { id: fundSpendId }
                })
                resolve({
                    errCode: 0,
                    errMessage: "Delete FundSpend Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createFundCollect = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let time = data.time;
            let year = new Date(time).getFullYear();
            let month = new Date(time).getMonth();
            let newYear = year
            let newMonth = month + 1;
            if (month === 11) {
                newYear = year + 1
                newMonth = 0
            }
            let fundCollect = await db.FundCollect.findOne({
                where: {
                    teamId: teamId,
                    time: {
                        [Op.gte]: new Date(year, month, 1),
                        [Op.lt]: new Date(new Date(newYear, newMonth, 1))
                    }
                },
                raw: false
            })
            if (!fundCollect) {
                await db.FundCollect.create({
                    teamId: teamId,
                    time: data.time,
                    amount: data.amount,
                    total: 0,
                    description: data.description
                })
                resolve({
                    errCode: 0,
                    errMessage: "Create FundCollect Successfully!"
                })
            }
            else {
                if (data.description !== fundCollect.description && data.description !== null) {
                    fundCollect.description = data.description
                }
                if (data.amount !== fundCollect.amount && data.amount !== null) {
                    let countPlayerDone = fundCollect.total / fundCollect.amount;
                    fundCollect.amount = data.amount;
                    fundCollect.total = data.amount * countPlayerDone;
                }
                await fundCollect.save();
                resolve({
                    errCode: 0,
                    errMessage: "Update FundCollect Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateTotal = (fundCollectId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fundCollect = await db.FundCollect.findOne({
                where: {
                    id: fundCollectId
                },
                raw: false
            })
            if (!fundCollect) {
                resolve(false)
            } else {
                let fundCollectDetails = await db.FundCollectDetail.findAll({
                    where: {
                        fundCollectId: fundCollectId,
                        status: 0
                    }
                })
                let count = fundCollectDetails.length;
                fundCollect.total = fundCollect.amount * count;
                await fundCollect.save();
                resolve(true)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createFundCollectDetails = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fundCollectDetail = await db.FundCollectDetail.findOne({
                where: {
                    fundCollectId: data.fundCollectId,
                    playerId: data.playerId
                },
                raw: false
            })
            if (!fundCollectDetail) {
                await db.FundCollectDetail.create({
                    fundCollectId: data.fundCollectId,
                    playerId: data.playerId,
                    status: data.status
                })
                let check = await updateTotal(data.fundCollectId);
                resolve({
                    errCode: 0,
                    errMessage: "Create FundCollectDetail Success!"
                })
            } else {
                fundCollectDetail.status = data.status;
                await fundCollectDetail.save();
                let check = await updateTotal(data.fundCollectId);
                resolve({
                    errCode: 0,
                    errMessage: "Update FundCollectDetail Success!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createMultiFundCollectDetails = (fundCollectId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                let fundCollectDetail = await db.FundCollectDetail.findOne({
                    where: {
                        fundCollectId: fundCollectId,
                        playerId: data[i].playerId
                    },
                    raw: false
                })
                if (!fundCollectDetail) {
                    await db.FundCollectDetail.create({
                        fundCollectId: fundCollectId,
                        playerId: data[i].playerId,
                        status: 0
                    })
                } else {
                    fundCollectDetail.status = 0;
                    await fundCollectDetail.save();
                }
            }
            let check = await updateTotal(fundCollectId);
            resolve({
                errCode: 0,
                errMessage: "Create MultiFundCollectDetail Success!"
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getFundOfTeam = (teamId, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let fundSpends = [];
            let fundCollect = [];
            if (type === '0') {
                fundSpends = await db.FundSpend.findAll({
                    where: {
                        teamId: teamId
                    },
                    raw: true
                });
                fundCollect = await db.FundCollect.findAll({
                    where: {
                        teamId: teamId
                    },
                    raw: true
                });
            } else {
                let year = new Date().getFullYear();
                let newYear = year
                let newMonth = Number(type);
                if (type === '12') {
                    newYear = year + 1
                    newMonth = 0
                }
                fundSpends = await db.FundSpend.findAll({
                    where: {
                        teamId: teamId,
                        time: {
                            [Op.gte]: new Date(year, Number(type) - 1, 1),
                            [Op.lt]: new Date(new Date(newYear, newMonth, 1))
                        }
                    },
                    raw: true
                })

                fundCollect = await db.FundCollect.findAll({
                    where: {
                        teamId: teamId,
                        time: {
                            [Op.gte]: new Date(year, Number(type) - 1, 1),
                            [Op.lt]: new Date(new Date(newYear, newMonth, 1))
                        }
                    },
                    raw: true
                })
            }
            let totalSpend = 0;
            let totalCollect = 0;
            let balance = 0;
            let fundOfMonth = 0;
            for (let i = 0; i < fundSpends.length; i++) {
                if (fundSpends[i].type === 0) {
                    totalSpend = totalSpend + fundSpends[i].amount
                } else {
                    totalCollect = totalCollect + fundSpends[i].amount
                }
            }
            for (let i = 0; i < fundCollect.length; i++) {
                if (fundCollect[i].time.toISOString().substring(0, 7) === new Date().toISOString().substring(0, 7)) {
                    fundOfMonth = fundCollect[i].total;
                }
                totalCollect = totalCollect + fundCollect[i].total;
                fundSpends.push({
                    id: fundCollect[i].id,
                    teamId: fundCollect[i].teamId,
                    time: fundCollect[i].time,
                    amount: fundCollect[i].total,
                    description: fundCollect[i].description,
                    type: 2,
                    createdAt: fundCollect[i].createdAt,
                    updatedAt: fundCollect[i].updatedAt
                })
            }
            balance = totalCollect - totalSpend;
            let data = {}
            data.balance = balance;
            data.fundOfMonth = fundOfMonth;
            data.totalCollect = totalCollect;
            data.totalSpend = totalSpend;
            data.fund = fundSpends.reverse();
            resolve({
                errCode: 0,
                errMessage: "Get All Fund Successfully!",
                data: data,

            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllFundCollectDetail = (teamId, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let year = new Date().getFullYear();
            let newYear = year
            let newMonth = Number(type);
            if (type === '12') {
                newYear = year + 1
                newMonth = 0
            }
            let fundCollect = await db.FundCollect.findOne({
                where: {
                    teamId: teamId,
                    time: {
                        [Op.gte]: new Date(year, Number(type) - 1, 1),
                        [Op.lt]: new Date(new Date(newYear, newMonth, 1))
                    }
                },
                raw: true
            })
            if (fundCollect) {
                let fundCollectDetail = await db.FundCollectDetail.findAll({
                    where: {
                        fundCollectId: fundCollect.id
                    },
                    raw: true
                })
                let players = await db.Player.findAll({
                    where: {
                        teamId: teamId,
                    }
                })
                let status = []
                for (let i = 0; i < players.length; i++) {
                    status.push({
                        id: players[i].id,
                        name: players[i].name,
                        number: players[i].number,
                        isCaptain: players[i].isCaptain,
                        status: 1
                    })
                }
                for (let i = 0; i < fundCollectDetail.length; i++) {
                    let playerPosition = players.findIndex((element) => element.id === fundCollectDetail[i].playerId);
                    status[playerPosition].status = fundCollectDetail[i].status
                }
                let success = [];
                let failed = [];
                let free = [];
                for (let i = 0; i < status.length; i++) {
                    if (status[i].status === 0) {
                        success.push(status[i]);
                    } else if (status[i].status === 1) {
                        failed.push(status[i]);
                    } else {
                        free.push(status[i]);
                    }
                }
                resolve({
                    errCode: 0,
                    errMessage: "Success",
                    fundCollect: fundCollect,
                    success: success,
                    failed: failed,
                    free: free
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "FundCollect not found"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = {
    createFundSpend: createFundSpend,
    deleteFundSpend: deleteFundSpend,
    createFundCollect: createFundCollect,
    createFundCollectDetails: createFundCollectDetails,
    createMultiFundCollectDetails: createMultiFundCollectDetails,
    getFundOfTeam: getFundOfTeam,
    getAllFundCollectDetail: getAllFundCollectDetail
}