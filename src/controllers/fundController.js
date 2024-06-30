import fundService from '../services/fundService'

let createFundSpend = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!teamId || !data) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.createFundSpend(teamId, data);
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

let deleteFundSpend = async (req, res) => {
    try {
        let fundSpendId = req.body.id;
        let teamId = req.user.id;
        if (!teamId || !fundSpendId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.deleteFundSpend(teamId, fundSpendId);
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

let createFundCollect = async (req, res) => {
    try {
        let data = req.body;
        let teamId = req.user.id;
        if (!teamId || !data) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.createFundCollect(teamId, data);
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

let createFundCollectDetails = async (req, res) => {
    try {
        let data = req.body;
        if (!data) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.createFundCollectDetails(data);
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

let createMultiFundCollectDetails = async (req, res) => {
    try {
        let fundCollectId = req.body.id;
        let data = req.body.data;
        if (!data || !fundCollectId) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.createMultiFundCollectDetails(fundCollectId, data);
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

let getFundOfTeam = async (req, res) => {
    try {
        let teamId = req.user.id;
        let type = req.body.type
        if (!teamId || type === undefined) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.getFundOfTeam(teamId, type);
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

let getAllFundCollectDetail = async (req, res) => {
    try {
        let teamId = req.user.id;
        let type = req.body.type
        if (!teamId || type === undefined) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs matchData!',
            })
        }
        let message = await fundService.getAllFundCollectDetail(teamId, type);
        let data = {}
        data.fundCollect = message.fundCollect;
        data.success = message.success;
        data.failed = message.failed;
        data.free = message.free;
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



module.exports = {
    createFundSpend: createFundSpend,
    deleteFundSpend: deleteFundSpend,
    createFundCollect: createFundCollect,
    createFundCollectDetails: createFundCollectDetails,
    createMultiFundCollectDetails: createMultiFundCollectDetails,
    getFundOfTeam: getFundOfTeam,
    getAllFundCollectDetail: getAllFundCollectDetail
}