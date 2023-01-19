const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
require('dotenv').config();
//Sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const validateHuman = async (token) => {
  const secret = process.env.RECAPTCHA_SECRETE_KEY;
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  );
  if (response.data.success) {
    console.log('Human');
    return true;
  } else {
    console.log('Bot');
    return false;
  }
};

app.post(`/contact`, (req, res) => {
  console.log(`request received`);
  let { name, email, message, token } = req.body;
  res.send('Request received');
  validateHuman(token);

  let parcel =
    `<p>Name: ${name}</p>` +
    `<p>Email: ${email}</p>` +
    `<p>Message: ${message}</p>`;

  //SendGrid
  const msg = {
    to: process.env.SENDGRID_MAIL_TO,
    from: process.env.SENDGRID_MAIL_FROM,
    subject: `Inquiry from web`,
    html: parcel,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(process.env.PORT, () => console.log('ISR server running...'));
