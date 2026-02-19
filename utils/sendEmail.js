import nodeMailer from "nodemailer";

async function sendEmail(token, email) {
  try {
    // Validate inputs
    if (!token) {
      throw new Error("Reset token is missing");
    }

    if (!email) {
      throw new Error("Recipient email is missing");
    }

    // Create transporter
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection (important)
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: `"E-mart Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Password Reset Request",
      text: `Password Reset Request

We received a request to reset your password.

Click the link below to reset your password:
https://e-mart-web.netlify.app/reset-password/${token}

This link will expire in 1 hour.

If you did not request this, please ignore this email.

Regards,  
E-mart Support Team`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log(" Email sent successfully:", info.response);

    return {
      success: true,
      message: "Email sent successfully",
      response: info.response,
    };
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);

    return {
      success: false,
      message: "Failed to send email",
      error: error.message,
    };
  }
}

export default sendEmail;
