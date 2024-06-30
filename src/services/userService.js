import db from "../models/index";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require('dotenv').config();
const { Op } = require("sequelize");

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }

    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //check email exist ????
            let check = await checkUserEmail(data.email)
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is alraedy in used, Plz try another email'
                })
            }
            else {
                //let hashPasswordFromBcrypt = await hashUserPassword(process.env.DEFAULT_PASSWORD);
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    role: data.role,
                    status: false,
                })
                resolve({
                    errCode: 0,
                    errMessage: 'OK'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = {};

            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    raw: false
                });
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check) {
                        data.errCode = 0;
                        data.errMessage = 'OK';
                        let userDataToken = {
                            id: user.id,
                            email: user.email,
                        }
                        const access_token = jwt.sign(userDataToken, process.env.ACCESS_TOKEN_SECRET, {
                            expiresIn: 60 * 60 * 24 * 30,
                        });
                        data.userData = {};
                        data.userData.token = access_token;
                        data.userData.id = user.id;
                        data.userData.email = user.email;
                        data.userData.role = user.role;
                        data.userData.status = user.status;

                        let teamData = await db.Team.findByPk(user.id);
                        if (teamData) {
                            data.userData.teamName = teamData.name
                            data.userData.image = teamData.image
                        }
                    } else {
                        data.errCode = 3;
                        data.errMessage = 'Wrong password';
                    }
                } else {
                    data.errCode = 2;
                    data.errMessage = `User's not found !`
                }

            } else {
                data.errCode = 1;
                data.errMessage = `Your's Email isn't exist in your system. Plz try other email !`;
            }

            resolve(data)
        } catch (e) {
            reject(e);
        }
    })
}

let handleLogout = (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = await db.User.findOne({
                where: { id: id },
                raw: false
            })
            user.refreshToken = null;
            await user.save();

            resolve({
                message: 'Logout Successfully!'
            });
        } catch (e) {
            reject(e);
        }

    })
}

let resetPassword = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your email is incorrect, please try again'
                })
            } else {
                let token = Math.floor(100000 + Math.random() * 900000);
                user.resetToken = token;
                user.resetTokenExpiration = Date.now() + 360000;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'OK',
                    token: token
                });
            }
        } catch (e) {
            reject(e);
        }

    })
}

let handleChangePassword = (token, newPassword) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    resetToken: token,
                    resetTokenExpiration: { [Op.gt]: Date.now() }
                },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'Your reset token is invalid or expired'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(newPassword);
                user.password = hashPasswordFromBcrypt;
                user.resetToken = null;
                user.resetTokenExpiration = null;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'New password updated'
                })
            }
        } catch (e) {
            reject(e);
        }

    })
}

let updateprofile = (id_user, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id_user },
                raw: false
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    errMessage: 'User not found'
                })
            } else {
                user.password = data.password;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: 'Update Successfully!',
                })
            }
        } catch (e) {
            reject(e);
        }

    })
}

let handleActiveUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    id: userId
                },
                raw: false
            })
            if (!user) {
                resolve(false)
            } else {
                user.status = true;
                await user.save();
                resolve(true)
            }
        } catch (e) {
            reject(e);
        }

    })
}

module.exports = {
    createNewUser: createNewUser,
    handleUserLogin: handleUserLogin,
    handleLogout: handleLogout,
    resetPassword: resetPassword,
    handleChangePassword: handleChangePassword,
    updateprofile: updateprofile,
    handleActiveUser: handleActiveUser
}