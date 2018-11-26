let nodemailer = require('nodemailer');

exports.sendMail = (user) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pixelweb29@gmail.com',
                pass: 'Pixel@123'
            }
        });
        console.log(user);
        const mailOptions = {
            from: 'amansr95@gmail.com',
            to: user.email,
            subject: 'Account Activation Link',
            html: 'Hello, <strong>'+ user.first_name + ' ' + user.last_name + '<strong><br><br>Please click on link below to activate your account: <br><br><a href=`http://localhost:3003/activate/' + user.temporary_token + '`> http://localhost:3003 </a>'
        };
        transporter.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            }else{
                console.log(info.messageId);
                console.log(nodemailer.getTestMessageUrl(info));
            }
        });
}