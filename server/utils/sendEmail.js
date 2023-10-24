const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", //smtp.gmail.com      //WelcomeHomes.com for cpanel emal
      service: "gmail", //when use local email
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_SENDER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "Welcome Homes <" + process.env.MAIL_SENDER + ">", // Set custom name here
      to: email,
      subject: subject,
      html: `<html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
              }
              .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                text-align: center;
                color:#000;
              }
              img {
                max-width: 50%;
                height: auto;
              }
             h1{
                font-size:30px;
                font-weight:600;
color:#000;
              }
              h2{
                font-size:48px;
                font-weight:800;
                color:#000;

              }
              h3{
                 font-size:25px;
                 font-weight:600;
                 color:#000;

              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>WelcomeHomes.com</h2>
              <img src="https://res.cloudinary.com/drvn4rjye/image/upload/v1698088863/myHomes/w4veluqnaeacdclolq43.jpg" alt="WelcomeHomes">
              <h1>${subject}</h1>
              <p>${text}</p>
              <img src="https://i.gifer.com/5Bg2.gif" alt="">
             <h3>Welcome Homes - Your Gateway to Dream Getaways</h3>
             <p>Discover a curated selection of exceptional homes with Welcome Homes . Book your perfect stay and create lasting memories.</p>
            </div> 
          </body>
        </html>
      `,
    });
    //  console.log(mailData)
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;
