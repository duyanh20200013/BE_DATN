import matchService from '../services/matchService'

let createNewMatch = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!teamId || !data.result || !data.time) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.createNewMatch(teamId, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllMatch = async (req, res) => {
    try {
        let teamId = req.user.id;
        let type = req.body.type
        if (!teamId || type === undefined) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.getAllMatch(teamId, type);
        let data = {};
        data.win = message.win;
        data.lost = message.lost;
        data.draw = message.draw;
        data.goal = message.goal;
        data.lostGoal = message.lostGoal;
        data.results = message.matchs;
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: data
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let deleteMatch = async (req, res) => {
    try {
        let teamId = req.user.id;
        let matchId = req.body.matchId
        if (!teamId || !matchId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.deleteMatch(teamId, matchId);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let editMatch = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!teamId || !data.result) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.editMatch(teamId, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let createMatchDetails = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!teamId || !data.matchId || !data.time) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.createMatchDetails(teamId, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getMatchDetails = async (req, res) => {
    try {
        let matchId = req.body.id;
        if (!matchId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.getMatchDetails(matchId);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let searchMatchByDate = async (req, res) => {
    try {
        let teamId = req.user.id;
        let time = req.body.time;
        if (!teamId || !time) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.searchMatchByDate(teamId, time);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getMatchDetailsByTitle = async (req, res) => {
    try {
        let teamId = req.user.id;
        let id = req.body.id;
        if (!teamId || !id) {
            return res.status(200).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.getMatchDetailsByTitle(teamId, id);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let createMatchDetailByTitle = async (req, res) => {
    try {
        let matchId = req.body.matchId;
        let type = req.body.type;
        let data = req.body.data
        if (!matchId || !type) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.createMatchDetailByTitle(matchId, type, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllMatchDetails = async (req, res) => {
    try {
        let teamId = req.user.id;
        let type = req.body.type
        if (!teamId || type === undefined) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.getAllMatchDetails(teamId, type);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let createNewMatchFind = async (req, res) => {
    try {
        let teamId = req.user.id;
        let data = req.body;
        if (!teamId || !data) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.createNewMatchFind(teamId, data);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let deleteMatchFind = async (req, res) => {
    try {
        let teamId = req.user.id;
        let matchFindId = req.body.matchFindId;
        if (!teamId || !matchFindId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.deleteMatchFind(teamId, matchFindId);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let editStatusMatchFind = async (req, res) => {
    try {
        let teamId = req.user.id;
        let matchFindId = req.body.matchFindId;
        if (!teamId || !matchFindId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.editStatusMatchFind(teamId, matchFindId);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let getAllMatchFind = async (req, res) => {
    try {
        let teamId = req.user.id;
        let type = req.body.type;
        if (!teamId || !type) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await matchService.getAllMatchFind(teamId, type);
        return res.status(200).json({
            errCode: message.errCode,
            message: message.errMessage,
            data: message.data
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}


module.exports = {
    createNewMatch: createNewMatch,
    getAllMatch: getAllMatch,
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