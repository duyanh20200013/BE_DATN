import express from "express";
import utilController from '../controllers/utilController'
import userController from '../controllers/userController'
import teamController from '../controllers/teamController'
import playerController from '../controllers/playerController'
import matchController from '../controllers/matchController'
import fundController from '../controllers/fundController'
const { authToken, authRole, authTokenNotCheckStatus } = require("../middlewares/is-auth");

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/api/all-diagram', utilController.getAllDiagrams);
    router.get('/api/all-stadium', utilController.getAllStadiums);
    router.post('/api/all-stadium-district', utilController.getAllStadiumByDistricts);
    router.post('/api/create-rate', authToken, utilController.createRate);

    router.post('/api/register', userController.handleCreateNewUser);
    router.post('/api/login', userController.handleLogin);
    // router.post('/api/auth-token', userController.generateToken);
    router.post('/logout', authTokenNotCheckStatus, userController.handleLogout);
    router.post('/auth/reset-password', userController.resetPassword);
    router.post('/auth/update-password', userController.handleChangePassword);
    router.post('/api/update-profile', authTokenNotCheckStatus, userController.updateprofile);

    router.get('/api/all-team', authToken, teamController.getAllTeams);
    router.get('/api/my-team', authToken, teamController.getMyTeam);
    router.get('/api/lineup', authToken, teamController.getLineUp);
    router.post('/api/team-by-id', authToken, teamController.getTeamById);
    router.post('/api/search-team', authToken, teamController.searchTeam);
    router.post('/api/create-team', authTokenNotCheckStatus, teamController.createNewTeam);
    router.put('/api/edit-team', authToken, teamController.editTeam);

    router.get('/api/all-players', authToken, playerController.getAllPlayerOfTeam);
    router.post('/api/create-player', authToken, playerController.createNewPlayer);
    router.post('/api/create-multiple-player', authToken, playerController.createMultiplePlayer);
    router.put('/api/edit-player', authToken, playerController.editPlayer);
    router.post('/api/delete-player', authToken, playerController.deletePlayer);
    router.get('/api/player', authToken, playerController.getPlayerById);
    router.put('/api/change-captain-player', authToken, playerController.handleChangeCaptainPlayer);
    router.post('/api/create-support', authToken, playerController.createSupport);
    router.post('/api/delete-support', authToken, playerController.deleteSupport);
    router.post('/api/remove-position', authToken, playerController.removePosition);
    router.put('/api/update-position', authToken, playerController.updatePosition);
    router.get('/api/remove-all-position', authToken, playerController.removeAllPosition);

    router.post('/api/create-match', authToken, matchController.createNewMatch);
    router.post('/api/all-match', authToken, matchController.getAllMatch);
    router.post('/api/delete-match', authToken, matchController.deleteMatch);
    router.put('/api/edit-match', authToken, matchController.editMatch);
    router.post('/api/create-matchdetails', authToken, matchController.createMatchDetails);
    router.post('/api/matchdetails', authToken, matchController.getMatchDetails);
    router.post('/api/get-match-by-date', authToken, matchController.searchMatchByDate);
    router.post('/api/matchdetails-by-title', authToken, matchController.getMatchDetailsByTitle);
    router.post('/api/create-matchdetails-by-title', authToken, matchController.createMatchDetailByTitle);
    router.post('/api/all-matchdetails', authToken, matchController.getAllMatchDetails);
    router.post('/api/all-matchfinds', authToken, matchController.getAllMatchFind);
    router.post('/api/edit-matchfinds', authToken, matchController.editStatusMatchFind);
    router.post('/api/delete-matchfinds', authToken, matchController.deleteMatchFind);
    router.post('/api/create-matchfinds', authToken, matchController.createNewMatchFind);

    router.post('/api/create-fundspend', authToken, fundController.createFundSpend);
    router.post('/api/delete-fundspend', authToken, fundController.deleteFundSpend);
    router.post('/api/create-fundcollect', authToken, fundController.createFundCollect);
    router.post('/api/create-fundcollectdetails', authToken, fundController.createFundCollectDetails);
    router.post('/api/create-multiple-fundcollectdetails', authToken, fundController.createMultiFundCollectDetails);
    router.post('/api/all-fund', authToken, fundController.getFundOfTeam);
    router.post('/api/all-fundcollect-detail', authToken, fundController.getAllFundCollectDetail);

    return app.use("/", router)
}

module.exports = initWebRoutes;