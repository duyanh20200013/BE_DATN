import { where } from 'sequelize'
import db from '../models/index'
import { raw } from 'body-parser'
const { Op } = require("sequelize");

let getAllPlayerOfTeam = (teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.Player.findAndCountAll({
                where: {
                    teamId: teamId
                }
            })
            resolve({
                errCode: 0,
                errMessage: 'OK',
                players: data.rows,
                count: data.count
            })
        } catch (e) {
            reject(e);
        }
    })
}

let createNewPlayer = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check_Player = await db.Player.findOne({
                where: {
                    teamId: teamId,
                    number: data.number,
                }
            })
            if (check_Player) {
                resolve({
                    errCode: 1,
                    errMessage: `The playerNumber is already exist`
                })
            } else {
                if (data.isCaptain) {
                    // change CaptainNow to 0
                    await db.Player.update({
                        isCaptain: 0
                    }, {
                        where: {
                            teamId: teamId,
                            isCaptain: 1
                        }
                    })
                }
                await db.Player.create({
                    name: data.name,
                    number: data.number,
                    teamId: teamId,
                    phone: data.phone,
                    isCaptain: data.isCaptain,
                    position: 0
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create Player Successfully!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createMultiplePlayer = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < data.length; i++) {
                await db.Player.create({
                    name: data[i].name,
                    number: data[i].number,
                    teamId: teamId,
                    phone: data[i].phone,
                    isCaptain: data[i].isCaptain,
                    position: 0
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'Create Multiple Player Successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deletePlayer = (playerId, teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let player = await db.Player.findOne({
                where: {
                    id: playerId,
                    teamId: teamId
                }
            })
            if (!player) {
                resolve({
                    errCode: 1,
                    errMessage: `The player is not exist`
                })
            } else {
                await db.Player.destroy({
                    where: { id: playerId }
                })
                resolve({
                    errCode: 0,
                    errMessage: `Delete Player Successfully`
                })
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

let editPlayer = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let player = await db.Player.findOne({
                where: {
                    id: data.id,
                    teamId: teamId
                },
                raw: false
            })
            if (!player) {
                resolve({
                    errCode: 1,
                    errMessage: `The player is not exist`
                })
            } else {
                let playerCheck = await db.Player.findOne({
                    where: {
                        teamId: teamId,
                        number: data.number,
                    }
                })
                if (playerCheck && playerCheck.id !== data.id) {
                    resolve({
                        errCode: 2,
                        errMessage: `The playerNumber is already exist`
                    })
                } else {
                    if (data.isCaptain === true && player.isCaptain === false) {
                        // change CaptainNow to 0
                        await db.Player.update({
                            isCaptain: 0
                        }, {
                            where: {
                                teamId: teamId,
                                isCaptain: 1
                            }
                        })
                    }
                    await db.Player.update({
                        name: data.name,
                        number: data.number,
                        isCaptain: data.isCaptain,
                        phone: data.phone
                    }, {
                        where: {
                            teamId: teamId,
                            id: data.id,
                        }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: `Edit Player Successfully`
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let handleChangeCaptainPlayer = (playerId, teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let player = await db.Player.findOne({
                where: {
                    id: playerId,
                    teamId: teamId,
                }
            })
            if (!player) {
                resolve({
                    errCode: 1,
                    errMessage: `The player is not exist or the player is supported`
                })
            } else {
                if (player.isCaptain !== 0) {
                    resolve({
                        errCode: 2,
                        errMessage: `The player is Captain. Not Change Captiain`
                    })
                } else {
                    // change CaptainNow to 0
                    await db.Player.update({
                        isCaptain: 0
                    }, {
                        where: {
                            teamId: teamId,
                            isCaptain: 1
                        }
                    })
                    // change CaptainNew to 1
                    await db.Player.update({
                        isCaptain: 1
                    }, {
                        where: {
                            id: playerId,
                            teamId: teamId
                        }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: `Change Captain Player Successfully`
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getPlayerById = (playerId, teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let player = await db.Player.findOne({
                where: {
                    id: playerId,
                    teamId: teamId
                }
            })
            if (!player) {
                resolve({
                    errCode: 1,
                    errMessage: `The player is not exist`
                })
            } else {
                resolve({
                    errCode: 0,
                    data: player
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createSupport = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check_Support = await db.Support.findOne({
                where: {
                    teamId: teamId,
                    number: data.number,
                }
            })
            if (check_Support) {
                resolve({
                    errCode: 1,
                    errMessage: `The supportNumber is already exist`
                })
            } else {
                await db.Support.create({
                    name: data.name,
                    number: data.number,
                    teamId: teamId,
                    position: 0
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create Support Successfully!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteSupport = (supportId, teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let support = await db.Support.findOne({
                where: {
                    id: supportId,
                    teamId: teamId
                }
            })
            if (!support) {
                resolve({
                    errCode: 1,
                    errMessage: `The support is not exist`
                })
            } else {
                await db.Support.destroy({
                    where: { id: supportId }
                })
                resolve({
                    errCode: 0,
                    errMessage: `Delete Support Successfully`
                })
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

let removePosition = (position, teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Support.update({
                position: 0
            }, {
                where: {
                    teamId: teamId,
                    position: position
                }
            })

            await db.Player.update({
                position: 0
            }, {
                where: {
                    teamId: teamId,
                    position: position
                }
            })

            resolve({
                errCode: 0,
                errMessage: `Remove Position Successfully`
            })
        }
        catch (e) {
            reject(e);
        }
    })
}

let updatePosition = (data, teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await removePosition(data.position, teamId);
            if (response.errCode === 0) {
                if (data.type === 'Support') {
                    let support = await db.Support.findOne({
                        where: {
                            id: data.id,
                            teamId: teamId
                        },
                        raw: false
                    })
                    if (!support) {
                        resolve({
                            errCode: 1,
                            errMessage: `The support is not exist`
                        })
                    } else {
                        support.position = data.position
                        await support.save();
                        resolve({
                            errCode: 0,
                            errMessage: `Update Position Successfully`
                        })
                    }
                } else {
                    let player = await db.Player.findOne({
                        where: {
                            id: data.id,
                            teamId: teamId
                        },
                        raw: false
                    })
                    if (!player) {
                        resolve({
                            errCode: 1,
                            errMessage: `The player is not exist`
                        })
                    } else {
                        player.position = data.position
                        await player.save();
                        resolve({
                            errCode: 0,
                            errMessage: `Update Position Successfully`
                        })
                    }
                }
            }
            else {
                resolve({
                    errCode: 2,
                    errMessage: `Have Error when remove Position`
                })
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

let removeAllPosition = (teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Support.update({
                position: 0
            }, {
                where: {
                    teamId: teamId,
                    position: {
                        [Op.ne]: 0,
                    }
                }
            })

            await db.Player.update({
                position: 0
            }, {
                where: {
                    teamId: teamId,
                    position: {
                        [Op.ne]: 0,
                    }
                }
            })

            resolve({
                errCode: 0,
                errMessage: `Remove All Position Successfully`
            })
        }
        catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllPlayerOfTeam: getAllPlayerOfTeam,
    createNewPlayer: createNewPlayer,
    createMultiplePlayer: createMultiplePlayer,
    deletePlayer: deletePlayer,
    editPlayer: editPlayer,
    handleChangeCaptainPlayer: handleChangeCaptainPlayer,
    getPlayerById: getPlayerById,
    createSupport: createSupport,
    deleteSupport: deleteSupport,
    updatePosition: updatePosition,
    removePosition: removePosition,
    removeAllPosition: removeAllPosition,
}