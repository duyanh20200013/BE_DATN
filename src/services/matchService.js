import { raw } from 'body-parser';
import db from '../models/index'
const { Op, where } = require("sequelize");

let getAllMatch = (teamId, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let matchs = {};
            if (type === '0') {
                matchs = await db.Match.findAll({
                    where: {
                        teamId: teamId
                    },
                    raw: true
                })
            } else {
                let year = new Date().getFullYear();
                let newYear = year
                let newMonth = Number(type);
                if (type === '12') {
                    newYear = year + 1
                    newMonth = 0
                }
                matchs = await db.Match.findAll({
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
            let win = 0;
            let lost = 0;
            let draw = 0;
            let goal = 0;
            let lostGoal = 0;
            for (let i = 0; i < matchs.length; i++) {
                goal = goal + matchs[i].goal;
                lostGoal = lostGoal + matchs[i].lostGoal;
                if (matchs[i].result === 'Thắng') {
                    win = win + 1;
                } else if (matchs[i].result === 'Hoà') {
                    draw = draw + 1;
                } else {
                    lost = lost + 1;
                }
            }
            resolve({
                errCode: 0,
                errMessage: "Get All Matches Success!",
                matchs: matchs,
                win: win,
                lost: lost,
                draw: draw,
                goal: goal,
                lostGoal: lostGoal
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createNewMatch = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Match.create({
                teamId: teamId,
                result: data.result,
                goal: data.goal,
                lostGoal: data.lostGoal,
                time: data.time,
                description: data.description,
                image: data.image
            })
            resolve({
                errCode: 0,
                errMessage: "Create Match Successfully!"
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteMatch = (teamId, matchId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await db.Match.findOne({
                where: {
                    teamId: teamId,
                    id: matchId
                }
            })
            if (!match) {
                resolve({
                    errCode: 1,
                    errMessage: "Match is not exit"
                })
            } else {
                await db.Match.destroy({
                    where: { id: matchId }
                })
                resolve({
                    errCode: 0,
                    errMessage: "Delete Match Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let editMatch = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await db.Match.findOne({
                where: {
                    id: data.id,
                    teamId: teamId
                },
                raw: false
            })
            if (!match) {
                resolve({
                    errCode: 1,
                    errMessage: "Match is not exist"
                })
            } else {
                match.result = data.result;
                match.goal = data.goal;
                match.lostGoal = data.lostGoal;
                match.description = data.description;
                if (data.image) {
                    match.image = data.image;
                }
                await match.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit Match Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

let getMatchDetails = (matchId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let matchDetail = await db.MatchDetail.findAll({
                where: {
                    matchId: matchId,
                }
            })
            resolve({
                errCode: 0,
                errMessage: "Get MatchDetails Successfully!",
                data: matchDetail
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createMatchDetails = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await db.Match.findOne({
                where: {
                    id: data.matchId,
                    teamId: teamId
                }
            })
            if (!match) {
                resolve({
                    errCode: 1,
                    errMessage: "Match is not exist"
                })
            } else {
                let player = await db.Player.findOne({
                    where: {
                        teamId: teamId,
                        id: data.playerId
                    }
                })
                if (!player) {
                    resolve({
                        errCode: 2,
                        errMessage: "Player is not exist"
                    })
                } else {
                    let matchDetail = await db.MatchDetail.findOne({
                        where: {
                            matchId: data.matchId,
                            playerId: data.playerId
                        },
                        raw: false
                    })
                    if (matchDetail) {
                        if (data.yellowCard) {
                            matchDetail.yellowCard = data.yellowCard
                        }
                        if (data.redCard) {
                            matchDetail.redCard = data.redCard
                        }
                        if (data.badAttitude) {
                            matchDetail.badAttitude = data.badAttitude
                        }
                        if (data.goal) {
                            matchDetail.goal = data.goal
                        }
                        if (data.assist) {
                            matchDetail.assist = data.assist
                        }
                        await matchDetail.save();
                        resolve({
                            errCode: 0,
                            errMessage: "Update Match Details Successfully!"
                        })
                    } else {
                        await db.MatchDetail.create({
                            matchId: data.matchId,
                            time: data.time,
                            playerId: data.playerId,
                            goal: data.goal,
                            assist: data.assist,
                            yellowCard: data.yellowCard,
                            redCard: data.redCard,
                            badAttitude: data.badAttitude
                        })
                        resolve({
                            errCode: 0,
                            errMessage: "Create Match Details Successfully!"
                        })
                    }
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getMatchDetailsByTitle = (teamId, matchId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let matchDetail = await db.MatchDetail.findAll({
                where: {
                    matchId: matchId,
                }
            })
            let players = await db.Player.findAll({
                where: {
                    teamId: teamId,
                }
            })
            let goal = new Array(players.length).fill(0)
            let assist = new Array(players.length).fill(0)
            let yellowCard = new Array(players.length).fill(0)
            let redCard = new Array(players.length).fill(0)
            let badAttitude = new Array(players.length).fill(null)
            for (let i = 0; i < matchDetail.length; i++) {
                let playerPosition = players.findIndex((element) => element.id === matchDetail[i].playerId);
                if (matchDetail[i].goal !== null) {
                    goal[playerPosition] = goal[playerPosition] + matchDetail[i].goal
                }
                if (matchDetail[i].assist !== null) {
                    assist[playerPosition] = assist[playerPosition] + matchDetail[i].assist
                }
                if (matchDetail[i].yellowCard !== null) {
                    yellowCard[playerPosition] = yellowCard[playerPosition] + matchDetail[i].yellowCard
                }
                if (matchDetail[i].redCard !== null) {
                    redCard[playerPosition] = redCard[playerPosition] + matchDetail[i].redCard
                }
                if (matchDetail[i].badAttitude !== null) {
                    badAttitude[playerPosition] = matchDetail[i].badAttitude
                }
            }
            let data = {};
            data.goal = goal;
            data.assist = assist;
            data.yellowCard = yellowCard;
            data.redCard = redCard;
            data.badAttitude = badAttitude;

            resolve({
                errCode: 0,
                errMessage: "Get MatchDetails Successfully!",
                data: data
            })
        } catch (e) {
            reject(e);
        }
    })
}

let searchMatchByDate = (teamId, time) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await db.Match.findAll({
                where: {
                    teamId: teamId,
                    time: {
                        [Op.gt]: new Date(new Date(time).getTime() - 7 * 60 * 60 * 1000),
                        [Op.lt]: new Date(new Date(time).getTime() + 17 * 60 * 60 * 1000)
                    }
                }
            })
            resolve({
                errCode: 0,
                errMessage: "Get Match Successfully!",
                data: match
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createMatchDetailByTitle = (matchId, type, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                let matchDetail = await db.MatchDetail.findOne({
                    where: {
                        matchId: matchId,
                        playerId: data[i].playerId
                    },
                    raw: false
                })
                if (!matchDetail) {
                    let matchDetailNew = await db.MatchDetail.build({
                        matchId: matchId,
                        playerId: data[i].playerId,
                    })
                    matchDetailNew[type] = data[i].value;
                    await matchDetailNew.save();
                    resolve({
                        errCode: 0,
                        errMessage: "Create MatchDetail Successfully!",
                    })
                } else {
                    matchDetail[type] = data[i].value;
                    await matchDetail.save();
                    resolve({
                        errCode: 0,
                        errMessage: "Update MatchDetail Successfully!",
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllMatchDetails = (teamId, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let matchs = [];
            if (type === '0') {
                matchs = await db.Match.findAll({
                    where: {
                        teamId: teamId
                    },
                    attributes: ['id'],
                    raw: true
                })
            } else {
                let year = new Date().getFullYear();
                let newYear = year
                let newMonth = Number(type);
                if (type === '12') {
                    newYear = year + 1
                    newMonth = 0
                }
                matchs = await db.Match.findAll({
                    where: {
                        teamId: teamId,
                        time: {
                            [Op.gte]: new Date(year, Number(type) - 1, 1),
                            [Op.lt]: new Date(new Date(newYear, newMonth, 1))
                        },
                    },
                    attributes: ['id'],
                    raw: true
                })
            }
            let matchDetails = [];
            if (matchs.length > 0) {
                for (let i = 0; i < matchs.length; i++) {
                    let matchDetail = await db.MatchDetail.findAll({
                        where: {
                            matchId: matchs[i].id
                        },
                        include: [
                            {
                                model: db.Player,
                                as: 'playerMatchDetailData',
                                attributes: ['id', 'name', 'number']
                            },
                        ],
                        raw: true,
                        nest: true
                    })
                    if (matchDetail.length > 0) {
                        for (let j = 0; j < matchDetail.length; j++) {
                            matchDetails.push(matchDetail[j]);
                        }
                    }
                }
            }

            let data = []

            for (let i = 0; i < matchDetails.length; i++) {
                let index = data.findIndex((element) => element.playerId === matchDetails[i].playerId);
                if (index === -1) {
                    let item = {
                        playerId: matchDetails[i].playerId,
                        name: matchDetails[i].playerMatchDetailData.name,
                        number: matchDetails[i].playerMatchDetailData.number,
                        goal: matchDetails[i].goal !== null ? matchDetails[i].goal : 0,
                        assist: matchDetails[i].assist !== null ? matchDetails[i].assist : 0,
                        yellowCard: matchDetails[i].yellowCard !== null ? matchDetails[i].yellowCard : 0,
                        redCard: matchDetails[i].redCard !== null ? matchDetails[i].redCard : 0,
                        badAttitude: matchDetails[i].badAttitude !== null ? [matchDetails[i].badAttitude] : []
                    }
                    data.push(item)
                } else {
                    data[index].goal = data[index].goal + (matchDetails[i].goal ? matchDetails[i].goal : 0)
                    data[index].assist = data[index].assist + (matchDetails[i].assist ? matchDetails[i].assist : 0)
                    data[index].yellowCard = data[index].yellowCard + (matchDetails[i].yellowCard ? matchDetails[i].yellowCard : 0)
                    data[index].redCard = data[index].redCard + (matchDetails[i].redCard ? matchDetails[i].redCard : 0)
                    if (matchDetails[i].badAttitude !== null) {
                        data[index].badAttitude.push(matchDetails[i].badAttitude);
                    }
                }
            }

            let goal = []
            let assist = []
            let yellowCard = []
            let redCard = []
            let badAttitude = []

            for (let i = 0; i < data.length; i++) {
                if (data[i].goal !== 0) {
                    goal.push({
                        playerId: data[i].playerId,
                        name: data[i].name,
                        number: data[i].number,
                        value: data[i].goal
                    })
                }
                if (data[i].assist !== 0) {
                    assist.push({
                        playerId: data[i].playerId,
                        name: data[i].name,
                        number: data[i].number,
                        value: data[i].assist
                    })
                }
                if (data[i].yellowCard !== 0) {
                    yellowCard.push({
                        playerId: data[i].playerId,
                        name: data[i].name,
                        number: data[i].number,
                        value: data[i].yellowCard
                    })
                }
                if (data[i].redCard !== 0) {
                    redCard.push({
                        playerId: data[i].playerId,
                        name: data[i].name,
                        number: data[i].number,
                        value: data[i].redCard
                    })
                }
                if (data[i].badAttitude.length > 0) {
                    badAttitude.push({
                        playerId: data[i].playerId,
                        name: data[i].name,
                        number: data[i].number,
                        value: data[i].badAttitude.length,
                        details: data[i].badAttitude
                    })
                }
            }

            let dataNew = {
                goal,
                assist,
                yellowCard,
                redCard,
                badAttitude
            }


            resolve({
                errCode: 0,
                errMessage: "Get MatchDetails Successfully!",
                data: dataNew
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createNewMatchFind = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let match = await db.Team.findOne({
                where: {
                    id: teamId,
                }
            })
            if (!match) {
                resolve({
                    errCode: 1,
                    errMessage: "Team is not exist"
                })
            } else {
                await db.MatchFind.create({
                    teamId: teamId,
                    phone: data.phone,
                    start: data.start,
                    end: data.end,
                    location: data.location,
                    description: data.description,
                    price: data.price,
                    rate: data.rate,
                    level: data.level,
                    status: 1
                })
                resolve({
                    errCode: 0,
                    errMessage: "Create Match Find Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteMatchFind = (teamId, matchFindId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let matchFind = await db.MatchFind.findOne({
                where: {
                    id: matchFindId,
                    teamId: teamId
                }
            })
            if (!matchFind) {
                resolve({
                    errCode: 1,
                    errMessage: "MatchFindId is not exist"
                })
            } else {
                await db.MatchFind.destroy({
                    where: { id: matchFindId }
                })
                resolve({
                    errCode: 0,
                    errMessage: "Delete Match Find Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let editStatusMatchFind = (teamId, matchFindId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let matchFind = await db.MatchFind.findOne({
                where: {
                    id: matchFindId,
                    teamId: teamId
                },
                raw: false
            })
            if (!matchFind) {
                resolve({
                    errCode: 1,
                    errMessage: "MatchFindId is not exist"
                })
            } else {
                if (matchFind.status === 0) {
                    matchFind.status = 1;
                } else {
                    matchFind.status = 0;
                }
                await matchFind.save();
                resolve({
                    errCode: 0,
                    errMessage: "Edit Match Find Status Successfully!"
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllMatchFind = (teamId, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (type === '0') {
                let matchFinds = await db.MatchFind.findAll({
                    where: {
                        teamId: teamId,
                        end: {
                            [Op.gt]: new Date()
                        },
                    }
                })
                for (let i = 0; i < matchFinds.length; i++) {
                    matchFinds[i].start.setHours(matchFinds[i].start.getHours() + 7);
                    matchFinds[i].end.setHours(matchFinds[i].end.getHours() + 7);
                    matchFinds[i].createdAt.setHours(matchFinds[i].createdAt.getHours() + 7);
                }
                resolve({
                    errCode: 0,
                    errMessage: "Get Match Find Successfully!",
                    data: matchFinds
                })
            } else {
                let matchFinds = await db.MatchFind.findAll({
                    where: {
                        status: 1,
                        end: {
                            [Op.gt]: new Date()
                        },
                        teamId: {
                            [Op.ne]: teamId
                        }
                    },
                    include: [
                        {
                            model: db.Team,
                            as: 'MatchFindTeamData',
                            attributes: ['name', 'image']
                        },
                    ],
                    raw: false,
                    nest: true
                })
                for (let i = 0; i < matchFinds.length; i++) {
                    matchFinds[i].start.setHours(matchFinds[i].start.getHours() + 7);
                    matchFinds[i].end.setHours(matchFinds[i].end.getHours() + 7);
                    matchFinds[i].createdAt.setHours(matchFinds[i].createdAt.getHours() + 7);
                }
                resolve({
                    errCode: 0,
                    errMessage: "Get Match Find Successfully!",
                    data: matchFinds
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllMatch: getAllMatch,
    createNewMatch: createNewMatch,
    deleteMatch: deleteMatch,
    editMatch: editMatch,
    createMatchDetails: createMatchDetails,
    getMatchDetails: getMatchDetails,
    searchMatchByDate: searchMatchByDate,
    getMatchDetailsByTitle: getMatchDetailsByTitle,
    createMatchDetailByTitle: createMatchDetailByTitle,
    getAllMatchDetails: getAllMatchDetails,
    createNewMatchFind: createNewMatchFind,
    deleteMatchFind: deleteMatchFind,
    editStatusMatchFind: editStatusMatchFind,
    getAllMatchFind: getAllMatchFind
}