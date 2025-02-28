import userService from "../services/userService";
const sgMail = require("@sendgrid/mail");
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  // if (message.errCode === 0) {
  //     const msg = {
  //         to: req.body.email,
  //         from: process.env.SENDGRID_EMAIL,
  //         subject: "Registered",
  //         html: `
  //           <h1>Login  with your email and default password</h1>
  //           <p>Email: ${req.body.email}</p>
  //           <p>Password: ${process.env.DEFAULT_PASSWORD}</p>
  //           <p>Your role: ${req.body.role}</p>
  //           `,
  //     }
  //     sgMail
  //         .send(msg)
  //         .then(() => { }, error => {
  //             console.error(error);
  //             if (error.response) {
  //                 console.error(error.response.body)
  //             }
  //         });
  // }
  return res.status(200).json({
    errCode: message.errCode,
    message: message.errMessage,
  })
}

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!',
    })
  }

  let data = await userService.handleUserLogin(email, password);

  return res.status(200).json({
    errCode: data.errCode,
    message: data.errMessage,
    data: data.userData ? data.userData : {},

  })
}

let handleLogout = async (req, res) => {
  let id = req.user.id;

  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!',
    })
  }

  let message = await userService.handleLogout(id);

  return res.status(200).json(message)
}

let getOrderConfirmationEmailHtml = (token) => {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
   <head>
   <!--[if gte mso 9]>
   <xml>
     <o:OfficeDocumentSettings>
       <o:AllowPNG/>
       <o:PixelsPerInch>96</o:PixelsPerInch>
     </o:OfficeDocumentSettings>
   </xml>
   <![endif]-->
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="x-apple-disable-message-reformatting">
     <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
     <title></title>
     
       <style type="text/css">
         @media only screen and (min-width: 620px) {
     .u-row {
       width: 600px !important;
     }
     .u-row .u-col {
       vertical-align: top;
     }
   
     .u-row .u-col-100 {
       width: 600px !important;
     }
   
   }
   
   @media (max-width: 620px) {
     .u-row-container {
       max-width: 100% !important;
       padding-left: 0px !important;
       padding-right: 0px !important;
     }
     .u-row .u-col {
       min-width: 320px !important;
       max-width: 100% !important;
       display: block !important;
     }
     .u-row {
       width: 100% !important;
     }
     .u-col {
       width: 100% !important;
     }
     .u-col > div {
       margin: 0 auto;
     }
   }
   body {
     margin: 0;
     padding: 0;
   }
   
   table,
   tr,
   td {
     vertical-align: top;
     border-collapse: collapse;
   }
   
   p {
     margin: 0;
   }
   
   .ie-container table,
   .mso-container table {
     table-layout: fixed;
   }
   
   * {
     line-height: inherit;
   }
   
   a[x-apple-data-detectors='true'] {
     color: inherit !important;
     text-decoration: none !important;
   }
   
   table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
       </style>
     
     
   
   <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
   
   </head>
   
   <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f0f0f0;color: #000000">
     <!--[if IE]><div class="ie-container"><![endif]-->
     <!--[if mso]><div class="mso-container"><![endif]-->
     <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f0f0f0;width:100%" cellpadding="0" cellspacing="0">
     <tbody>
     <tr style="vertical-align: top">
       <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f0f0f0;"><![endif]-->
       
     
     
   <div class="u-row-container" style="padding: 0px;background-color: transparent">
     <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
       <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
         
   <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ddffe7;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
     <div style="background-color: #ddffe7;height: 100%;width: 100% !important;">
     <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
     
   <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
     <tbody>
       <tr>
         <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
           
   <table width="100%" cellpadding="0" cellspacing="0" border="0">
     <tr>
       <td style="padding-right: 0px;padding-left: 0px;" align="center">
         
         <img align="center" border="0" src="https://cdn.templates.unlayer.com/assets/1701676201199-password.png" alt="image" title="image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 190px;" width="190"/>
         
       </td>
     </tr>
   </table>
   
         </td>
       </tr>
     </tbody>
   </table>
   
     <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
     </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
         <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
       </div>
     </div>
     </div>
     
   
   
     
     
   <div class="u-row-container" style="padding: 0px;background-color: transparent">
     <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
       <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
         
   <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
     <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
     <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
     
   <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
     <tbody>
       <tr>
         <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
           
     <!--[if mso]><table width="100%"><tr><td><![endif]-->
       <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 22px; font-weight: 700;"><span><span>Your one-time code is</span></span></h1>
     <!--[if mso]></td></tr></table><![endif]-->
   
         </td>
       </tr>
     </tbody>
   </table>
   
   <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
     <tbody>
       <tr>
         <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
           
     <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
   <div align="center">
     <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://unlayer.com" style="height:42px; v-text-anchor:middle; width:216px;" arcsize="0%"  strokecolor="#000000" strokeweight="2px" fillcolor="#ffffff"><w:anchorlock/><center style="color:#000000;"><![endif]-->
       <a href="https://unlayer.com" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #ffffff; border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px; width:38%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #000000; border-top-style: solid; border-top-width: 2px; border-left-color: #000000; border-left-style: solid; border-left-width: 2px; border-right-color: #000000; border-right-style: solid; border-right-width: 2px; border-bottom-color: #000000; border-bottom-style: solid; border-bottom-width: 2px;font-size: 18px;">
         <span style="display:block;padding:10px 20px;line-height:120%;">${token}</span>
       </a>
       <!--[if mso]></center></v:roundrect><![endif]-->
   </div>
   
         </td>
       </tr>
     </tbody>
   </table>
   
   <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
     <tbody>
       <tr>
         <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
           
     <div style="font-size: 14px; line-height: 140%; text-align: center; word-wrap: break-word;">
       <p style="line-height: 140%;">Please verify you're really you by entering this</p>
   <p style="line-height: 140%;">6-digit code when you reset password. Just a heads up, this code will expire</p>
   <p style="line-height: 140%;">in 10 minutes for security reasons.</p>
     </div>
   
         </td>
       </tr>
     </tbody>
   </table>
   
     <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
     </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
         <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
       </div>
     </div>
     </div>
     
   
   
     
     
   <div class="u-row-container" style="padding: 0px;background-color: transparent">
     <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
       <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
         
   <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
     <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
     <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
     
   <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
     <tbody>
       <tr>
         <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
           
     <!--[if mso]><table width="100%"><tr><td><![endif]-->
       <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 16px; font-weight: 400;">If you didn’t request to change your password, simply ignore this email.</h1>
     <!--[if mso]></td></tr></table><![endif]-->
   
         </td>
       </tr>
     </tbody>
   </table>
   
     <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
     </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
         <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
       </div>
     </div>
     </div>
     
   
   
     
     
   <div class="u-row-container" style="padding: 2px 0px 0px;background-color: transparent">
     <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
       <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 2px 0px 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
         
   <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
     <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
     <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
     
   <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
     <tbody>
       <tr>
         <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">
           
     <!--[if mso]><table width="100%"><tr><td><![endif]-->
       <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 13px; font-weight: 400;"><span><span><span><span>If you have any questions, contact our Website  Guides.<br />Or, visit our Help Center.</span></span></span></span></h1>
     <!--[if mso]></td></tr></table><![endif]-->
   
         </td>
       </tr>
     </tbody>
   </table>
   
     <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
     </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
         <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
       </div>
     </div>
     </div>
     
   
   
       <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
       </td>
     </tr>
     </tbody>
     </table>
     <!--[if mso]></div><![endif]-->
     <!--[if IE]></div><![endif]-->
   </body>
   
   </html>
   `
}

let resetPassword = async (req, res) => {
  let email = req.body.email;

  if (!email) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!',
    })
  }

  let message = await userService.resetPassword(email);
  if (message.errCode === 0) {
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: "Password Reset",
      //     html: `
      // <p>You requested a password reset</p>
      // <p>Your authentication code is ${message.token}</p>
      // `,
      html: getOrderConfirmationEmailHtml(message.token)
    }
    sgMail
      .send(msg)
      .then(() => { }, error => {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      });
  }

  return res.status(200).json({
    errCode: message.errCode,
    message: message.errMessage,
  })
}

let handleChangePassword = async (req, res) => {
  let newPassword = req.body.password;
  let token = Number(req.body.token)

  if (!newPassword) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!',
    })
  }
  let message = await userService.handleChangePassword(token, newPassword);
  return res.status(200).json({
    errCode: message.errCode,
    message: message.errMessage,
  })
}

let updateprofile = async (req, res) => {
  let id_user = req.user.id;
  let data = req.body

  if (!id_user || !data.password) {
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!',
    })
  }
  let message = await userService.updateprofile(id_user, data);
  return res.status(200).json(message)
}

module.exports = {
  handleCreateNewUser: handleCreateNewUser,
  handleLogin: handleLogin,
  handleLogout: handleLogout,
  resetPassword: resetPassword,
  handleChangePassword: handleChangePassword,
  updateprofile: updateprofile
}