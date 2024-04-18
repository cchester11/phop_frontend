import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';

configDotenv();

// api route for handling submission of email to the zoho account
export async function postEmail(req, res) {
      // try catch structure 
      try {
            // destructure the request body
            const { name, email, phone } = req.body

            // configure a transporter object using the createTransport method
            const transporter = nodemailer.createTransport({
                  // host
                  host: "smtp.zoho.com",
                  // port
                  port: 465,
                  // secure
                  secure: true,
                  // auth uses nested object containing username and password
                  auth: {
                        username: process.env.USERNAME,
                        password: process.env.PASSWORD
                  }
            })

            // send email zoho account using the sendMail method
            await transporter.sendMail({
                  from: email,
                  to: process.env.USERNAME,
                  subject: email,
                  text: `
                        Name: ${name},
                        Email: ${email},
                        Phone: ${phone}
                  `
            }, (err, info) => {
                  if(err) {
                        res.status(500).json({
                              message: "Error sending email with: " + error
                        })
                  }

                  res.status(200).json({
                        message: info
                  })
            })

            // handle response to client
      } catch (error) {
            res.status(500).json({
                  message: "Error handling request with: " + error
            })
      }
};