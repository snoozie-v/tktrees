// const express = require('express');
// const nodemailer = require('nodemailer');
// const app = express();
// const port = process.env.PORT || 3000;
// const path = require('path');
// const cors = require('cors');
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../public')));

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {}
//     }
    
// });

// app.post('/submit-quote', (req, res) => {
//     const { name, email, phone, service, description } = req.body;
    
//     const mailOptions = {
//         from: 'leadflow975@gmail.com',
//         to: 'leadflow975@gmail.com',
//         subject: 'New Quote Request',
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDescription: ${description}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email. Please try again later.');
//             return;
//         }
//         console.log('Message sent: %s', info.messageId);
//         res.sendFile(path.join(__dirname, '../public/thank-you.html'));
//     });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });