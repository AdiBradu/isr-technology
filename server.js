const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const path = require('path');
const nodemailer = require("nodemailer");
require('dotenv').config()

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/contact', async (req, res) => {

  let {name, email, message} = req.body

  let parcel = (
    `<p>Name: ${name}</p>` +
    `<p>Email: ${email}</p>` +
    `<p>Message: ${message}</p>`
  )

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST, 
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  transport.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to send email");
    }
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: email,
    bcc: process.env.BCC,
    subject: `Inquiry from web`,
    html: parcel
  }

  transport.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error: ',error);
    } else {
        console.log('Email sent: ' + info.response);
    }
  });

});

app.listen(process.env.PORT, () => console.log("ISR server running..."));