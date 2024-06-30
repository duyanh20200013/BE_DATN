import teamService from '../services/teamService'
import toPlain from '../ultils/toPlain'

let getAllTeams = async (req, res) => {
    try {
        let teamId = req.user.id;
        let teams = await teamService.getAllTeams(teamId)
        return res.status(200).json(teams)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getMyTeam = async (req, res) => {
    try {
        let teamId = req.user.id;
        if (!teamId) {
            return res.status(500).json({
                errCode: 1000,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await teamService.getMyTeam(teamId);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data,
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getTeamById = async (req, res) => {
    try {
        let teamId = req.body.teamId;
        if (!teamId) {
            return res.status(500).json({
                errCode: 1000,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await teamService.getTeamById(teamId);
        let star = 0;
        const responseData = toPlain(message.data);
        delete responseData.teamPlayerData;
        responseData.countPlayer = message.countPlayer;
        for (let i = 0; i < responseData.teamRateData.length; i++) {
            delete responseData.teamRateData[i].oppositeTeamId;
            responseData.teamRateData[i].oppositeData = message.dataOpposite[i];
            star = star + responseData.teamRateData[i].star
        }
        if (star !== 0) {
            star = star / (responseData.teamRateData.length)
        }
        responseData.star = star;
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: responseData,
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let searchTeam = async (req, res) => {
    try {
        let teamId = req.user.id;
        let searchText = req.body.searchText;
        let teams = await teamService.searchTeam(searchText, teamId);
        return res.status(200).json(teams)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let createNewTeam = async (req, res) => {
    try {
        let data = req.body;
        let userId = req.user.id;
        if (!data.name || !data.phone) {
            return res.status(500).json({
                errCode: 1000,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await teamService.createNewTeam(userId, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let editTeam = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!teamId || !data) {
            return res.status(500).json({
                errCode: 1000,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await teamService.editTeam(teamId, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getLineUp = async (req, res) => {
    try {
        let teamId = req.user.id;
        if (!teamId) {
            return res.status(500).json({
                errCode: 1000,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await teamService.getLineUp(teamId);
        let data = {};
        data.lineup = message.lineup
        data.players = message.players
        data.supports = message.supports
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: data
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
    getAllTeams: getAllTeams,
    createNewTeam: createNewTeam,
    getMyTeam: getMyTeam,
    editTeam: editTeam,
    getTeamById: getTeamById,
    searchTeam: searchTeam,
    getLineUp: getLineUp
}