const jwt = require("jsonwebtoken");
import db from "../models/index";
require('dotenv').config();

exports.authToken = (req, res, next) => {
    const auth_header = req.headers["authorization"];
    const access_token = auth_header && auth_header.split(" ")[1];
    if (access_token != null) {
        jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                // const error = new Error("Timeout please login again");
                // error.statusCode = 403;
                // throw error;
                return res.status(403).json({
                    errCode: 9998,
                    message: "Timeout please login again",
                });
            }
            db.User.findByPk(user.id).then((check_user) => {
                if (check_user.status != 1) {
                    return res.status(401).json({
                        errCode: 1009,
                        message: "Access Denied - Unauthorized",
                    });
                } else {
                    req.user = check_user;
                    next();
                }
            });
        });
    } else {
        // const error = new Error("Not Authenticated");
        // error.statusCode = 401;
        // throw error;
        return res.status(401).json({
            errCode: 9998,
            message: "Not Authenticated",
        });
    }
};
/**
 * Auth Role
 * @param {[String]} roles
 */
exports.authRole = (roles) => {
    return async (req, res, next) => {
        if (
            !roles.includes(req.user.role) ||
            req.user.status != 1
        ) {
            return res.status(401).json({
                errCode: 1009,
                message: "Access Denied - Unauthorized",
            });
        }
        next();
    };
};

exports.authTokenNotCheckStatus = (req, res, next) => {
    const auth_header = req.headers["authorization"];
    const access_token = auth_header && auth_header.split(" ")[1];
    if (access_token != null) {
        jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                // const error = new Error("Timeout please login again");
                // error.statusCode = 403;
                // throw error;
                return res.status(403).json({
                    errCode: 9998,
                    message: "Timeout please login again",
                });
            }
            db.User.findByPk(user.id).then((check_user) => {
                req.user = check_user;
                next();
            });
        });
    } else {
        // const error = new Error("Not Authenticated");
        // error.statusCode = 401;
        // throw error;
        return res.status(401).json({
            errCode: 9998,
            message: "Not Authenticated",
        });
    }
};
