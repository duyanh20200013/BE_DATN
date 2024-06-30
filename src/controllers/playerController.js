import playerService from '../services/playerService'

let getAllPlayerOfTeam = async (req, res) => {
    try {
        let teamId = req.user.id;
        let response = await playerService.getAllPlayerOfTeam(teamId)
        const data = {}
        data.players = response.players;
        data.count = response.count
        return res.status(200).json({
            errCode: response.errCode,
            message: response.errMessage,
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

let createNewPlayer = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!data.name || !data.number) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await playerService.createNewPlayer(teamId, data);
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

let createMultiplePlayer = async (req, res) => {
    try {
        let data = req.body.data;
        let teamId = req.user.id;
        if (!teamId || data.length === 0) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await playerService.createMultiplePlayer(teamId, data);
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

let deletePlayer = async (req, res) => {
    try {
        let playerId = req.body.playerId;
        let teamId = req.user.id;
        if (!playerId || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let message = await playerService.deletePlayer(playerId, teamId);
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

let editPlayer = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if ((data.id === undefined) || !data.name || !data.number || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await playerService.editPlayer(teamId, data);
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

let getPlayerById = async (req, res) => {
    try {
        let playerId = req.query.playerId;
        let teamId = req.user.id;
        if (!playerId || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let player = await playerService.getPlayerById(playerId, teamId);
        return res.status(200).json(player)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: 'Error from service...'
        })
    }
}

let handleChangeCaptainPlayer = async (req, res) => {
    try {
        let playerId = req.body.playerId;
        let teamId = req.user.id;
        if (!playerId || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let message = await playerService.handleChangeCaptainPlayer(playerId, teamId);
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

let createSupport = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!data.name || !data.number) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs parameter!',
            })
        }
        let message = await playerService.createSupport(teamId, data);
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

let deleteSupport = async (req, res) => {
    try {
        let supportId = req.body.supportId;
        let teamId = req.user.id;
        if (!supportId || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let message = await playerService.deleteSupport(supportId, teamId);
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

let removePosition = async (req, res) => {
    try {
        let position = req.body.position;
        let teamId = req.user.id;
        if (!position || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let message = await playerService.removePosition(position, teamId);
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

let updatePosition = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!data.position || !data.type || !teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let message = await playerService.updatePosition(data, teamId);
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

let removeAllPosition = async (req, res) => {
    try {
        let teamId = req.user.id;
        if (!teamId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs query parameter!',
            })
        }
        let message = await playerService.removeAllPosition(teamId);
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


module.exports = {
    getAllPlayerOfTeam: getAllPlayerOfTeam,
    createNewPlayer: createNewPlayer,
    createMultiplePlayer: createMultiplePlayer,
    deletePlayer: deletePlayer,
    editPlayer: editPlayer,
    getPlayerById: getPlayerById,
    handleChangeCaptainPlayer: handleChangeCaptainPlayer,
    createSupport: createSupport,
    deleteSupport: deleteSupport,
    removePosition: removePosition,
    updatePosition: updatePosition,
    removeAllPosition: removeAllPosition
}