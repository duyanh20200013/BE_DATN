import { raw } from 'body-parser';
import db from '../models/index'
import userService from "./userService";
import { Sequelize } from '../models/index';
import { sequelize } from '../models/index';
const { QueryTypes } = require('sequelize');
const { Op } = require("sequelize");

let getAllTeams = (myTeamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let teams = await db.Team.findAndCountAll({
                where: {
                    id: {
                        [Op.ne]: myTeamId,
                    }
                },
                attributes: { exclude: ['createdAt', 'updatedAt', 'balance'] },
                raw: true
            })
            resolve({
                errCode: 0,
                message: 'OK',
                data: teams
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getTeamById = (teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myTeam = await db.Team.findOne({
                where: {
                    id: teamId
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'balance'],
                    // include: [
                    //     [Sequelize.fn("COUNT", Sequelize.col("players.id")), "playerCount"],
                    //     // [Sequelize.literal("(SELECT COUNT(*) from players as p where p.teamId=teams.id)"), "playerCount"]
                    // ]
                },
                include: [
                    {
                        model: db.Player,
                        as: 'teamPlayerData',
                        attributes: ['name']
                    },
                    {
                        model: db.Rate,
                        as: 'teamRateData',
                    },
                ],
                raw: false,
                nest: true
            })
            if (!myTeam) {
                resolve({
                    errCode: 1,
                    errMessage: 'Not Found Team',
                })
            } else {
                let countPlayer = myTeam.teamPlayerData.length;
                let dataOpposite = [];
                for (let i = 0; i < myTeam.teamRateData.length; i++) {
                    let oppositeData = await db.Team.findOne({
                        where: {
                            id: myTeam.teamRateData[i].oppositeTeamId
                        },
                        attributes: {
                            exclude: ['phone', 'balance', 'createdAt', 'updatedAt', 'description']
                        },
                        raw: true
                    })
                    if (oppositeData) {
                        dataOpposite.push(oppositeData);
                    }
                }
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data: myTeam,
                    countPlayer: countPlayer,
                    dataOpposite: dataOpposite
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getMyTeam = (teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myTeam = await db.Team.findByPk(teamId);
            if (!myTeam) {
                resolve({
                    errCode: 1,
                    errMessage: 'Not Found Team',
                })
            } else {
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data: myTeam
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let searchTeam = (searchText, myTeamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let teams = await db.Team.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.substring]: searchText
                            }
                        },
                        {
                            phone: {
                                [Op.substring]: searchText
                            }
                        },
                        {
                            description: {
                                [Op.substring]: searchText
                            }
                        }
                    ],
                    id: {
                        [Op.ne]: myTeamId,
                    }
                },
                attributes: { exclude: ['createdAt', 'updatedAt', 'balance'] },
            })
            resolve({
                errCode: 0,
                message: 'OK',
                data: teams
            })
        } catch (e) {
            reject(e);
        }
    })
}



let createNewTeam = (userId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check_Team = await db.Team.findOne({
                where: {
                    id: userId
                }
            })

            if (check_Team) {
                resolve({
                    errCode: 1,
                    errMessage: 'Create Team Failed. User is have Team',
                })
            }
            else {
                let check = await userService.handleActiveUser(userId);
                if (!check) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Create Team Failed. Not Find User'
                    })
                }
                else {
                    await db.Team.create({
                        id: userId,
                        name: data.name,
                        balance: 0,
                        phone: data.phone,
                        image: data.image,
                        description: data.description,
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'Create Team Successfully!'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let editTeam = (teamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let teamData = await db.Team.findOne({
                where: {
                    id: teamId
                },
                raw: false
            })
            if (!teamData) {
                resolve({
                    errCode: 1,
                    errMessage: 'Not found Team!'
                })
            } else {
                if (data.name) {
                    teamData.name = data.name;
                }
                if (data.phone) {
                    teamData.phone = data.phone;
                }
                if (data.image) {
                    teamData.image = data.image;
                }
                if (data.description) {
                    teamData.description = data.description;
                }
                if (data.balance) {
                    teamData.balance = data.balance;
                }
                await teamData.save();
                resolve({
                    errCode: 0,
                    errMessage: 'Edit Team Success!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getLineUp = (teamId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let players = await db.Player.findAll({
                where: {
                    teamId: teamId
                },
                raw: true
            })
            let supports = await db.Support.findAll({
                where: {
                    teamId: teamId
                },
                raw: true
            })
            let lineup = {};
            for (let i = 0; i < players.length; i++) {
                if (players[i].position !== '0') {
                    lineup[players[i].position] = {}
                    lineup[players[i].position].id = players[i].id
                    lineup[players[i].position].name = players[i].name
                    lineup[players[i].position].number = players[i].number
                    // lineup[players[i].position] = players[i].id
                }
            }
            for (let i = 0; i < supports.length; i++) {
                if (supports[i].position !== '0') {
                    lineup[supports[i].position] = {}
                    lineup[supports[i].position].id = supports[i].id
                    lineup[supports[i].position].name = supports[i].name
                    lineup[supports[i].position].number = supports[i].number
                }
            }
            players = players.filter((player) => player.position === '0');
            supports = supports.filter((support) => support.position === '0');
            resolve({
                errCode: 0,
                errMessage: 'Edit Team Success!',
                lineup: lineup,
                players: players,
                supports: supports
            })
        } catch (e) {
            reject(e);
        }
    })
}

let updateBalance = (teamId, amount, type) => {
    return new Promise(async (resolve, reject) => {
        try {
            let team = await db.Team.findOne({
                where: {
                    id: teamId
                },
                raw: false
            })
            if (!team) {
                resolve(false)
            } else {
                if (type === 0) {
                    team.balance = team.balance + amount;
                    await teamData.save();
                    resolve(true)
                } else {
                    team.balance = team.balance - amount;
                    await teamData.save();
                    resolve(true)
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}


module.exports = {
    getAllTeams: getAllTeams,
    createNewTeam: createNewTeam,
    getMyTeam: getMyTeam,
    editTeam: editTeam,
    getTeamById: getTeamById,
    searchTeam: searchTeam,
    getLineUp: getLineUp,
    updateBalance: updateBalance
}