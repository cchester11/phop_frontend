import nodemailer from 'nodemailer';
import { env } from '$lib/env';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
// api route for handling submission of email to the zoho account
export async function POST({ request }) {
      // try catch structure 
      try {
            // Parse the request body
            const { name, email, phone } = await request.json();

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
                        user: env.USERNAME,
                        pass: env.PASSWORD
                  }
            });

            // send email zoho account using the sendMail method
            const info = await transporter.sendMail({
                  from: env.USERNAME,
                  to: env.USERNAME,
                  subject: email,
                  text: `
                        Name: ${name},
                        Email: ${email},
                        Phone: ${phone}
                  `
            }, (err, info) => {
                  if(err) {
                        throw new Error(err)
                  }

                  console.log(info.accepted)
            });

            // Return a Response object with a JSON body
            return json({
                  status: 200,
                  body: { message: "Email sent successfully", info }
            }, new Response())
      } catch (error) {
            // Return a Response object with a JSON body for errors
            return new Response({
                  status: 500,
                  body: { message: "Error sending email", error }
            });
      }
};
