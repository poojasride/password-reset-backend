import nodeMailer from "nodemailer";

async function sendEmail(token, email) {
  try {
    // Create transporter using Gmail service
    // IMPORTANT: Use Gmail App Password, not your normal Gmail password
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email configuration
    const mailOptions = {
      from: "pooja.sri.06.2001@gmail.com",
      to: email, // send reset token to user's email
      subject: "Password Reset Request",
      text: `Password Reset Request
             We received a request to reset your password.

             Click the link below to reset your password:
            https://e-mart-web.netlify.app/reset-password/${token}

             This link will expire in 1 hour. So quickly reset your password using this link.

             If you did not request this, please ignore this email. 

             Regards,  
             E-mart Support Team`,
    };

    // Send email (await is important, otherwise response will not be returned)
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    return info; // return response to controller
  } catch (error) {
    console.log("Email error:", error.message);
    throw error;
  }
}

export default sendEmail;
