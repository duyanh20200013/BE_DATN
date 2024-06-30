import utilService from '../services/utilService'

let getAllDiagrams = async (req, res) => {
    try {
        let diagrams = await utilService.getAllDiagrams()
        return res.status(200).json(diagrams)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllStadiums = async (req, res) => {
    try {
        let stadiums = await utilService.getAllStadiums()
        return res.status(200).json(stadiums)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllStadiumByDistricts = async (req, res) => {
    try {
        let districtName = req.body.districtName
        let message = await utilService.getAllStadiumByDistricts(districtName)
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let createRate = async (req, res) => {
    try {
        let data = req.body;
        let oppositeTeamId = req.user.id;
        if (!oppositeTeamId || !data.content || !data.star || !data.teamId) {
            return res.status(500).json({
                errCode: 1000,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await utilService.createRate(oppositeTeamId, data)
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

module.exports = {
    getAllDiagrams: getAllDiagrams,
    getAllStadiums: getAllStadiums,
    getAllStadiumByDistricts: getAllStadiumByDistricts,
    createRate: createRate
}