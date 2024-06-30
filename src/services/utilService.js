import { raw } from 'body-parser'
import db from '../models/index'

let getAllDiagrams = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let diagrams = await db.Diagram.findAll()
            resolve({
                errCode: 0,
                data: diagrams
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllStadiums = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let stadiums = await db.Stadium.findAll()
            resolve({
                errCode: 0,
                data: stadiums
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllStadiumByDistricts = (districtName) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (districtName !== 'Tất cả') {
                let stadiums = await db.Stadium.findAll({
                    where: {
                        district: districtName
                    }
                })
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data: stadiums
                })
            } else {
                let stadiums = await db.Stadium.findAll()
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    data: stadiums
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

const createRate = (oppositeTeamId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let rate = await db.Rate.findOne({
                where: {
                    teamId: data.teamId,
                    oppositeTeamId: oppositeTeamId
                },
                raw: false
            })
            if (rate) {
                rate.content = data.content;
                rate.star = data.star;
                await rate.save();
                resolve({
                    errCode: 0,
                    errMessage: 'Update OK'
                })
            } else {
                await db.Rate.create({
                    oppositeTeamId: oppositeTeamId,
                    teamId: data.teamId,
                    content: data.content,
                    star: data.star
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getAllDiagrams: getAllDiagrams,
    getAllStadiums: getAllStadiums,
    getAllStadiumByDistricts: getAllStadiumByDistricts,
    createRate: createRate
}