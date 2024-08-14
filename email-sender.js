var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'refka.bejaoui.pro@gmail.com',
    pass: '08971646refka'
  }
});

var mailOptions = {
  from: 'refka.bejaoui.pro@gmail.com',
  to: 'your_true_friend_refka@yahoo.fr',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});