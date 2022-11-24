/*const nodemailer = require("nodemailer");

module.exports = async (name, email, message) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.REACT_APP_HOST_MAIL,
			service: process.env.REACT_APP_SERVICE,
			port: Number(process.env.REACT_APP_EMAIL_PORT),
			secure: Boolean(process.env.REACT_APP_SECURE),
			auth: {
				user: process.env.REACT_APP_USER,
				pass: process.env.REACT_APP_PASS,
				
			},
		});
      
		await transporter.sendMail({
			from: process.env.REACT_APP_USER,
			to: "romeran14@gmail.com",
			subject: "Mensaje desde el portafolio",
			text: `Nombre:${name}<br>
                   Correo:${email}<br>
                   Correo:${message}
            `,
		},(error, info) => {
			if (error) {
			  return console.log(error);
			}
			console.log('Message sent: %s', info.messageId, info.accepted);
		
		  });
	
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};*/