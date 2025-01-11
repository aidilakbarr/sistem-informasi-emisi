import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const sendVerificationEmail = (email: string, token: string) => {
  const userEmail = process.env.EMAIL_USER;
  const userPassword = process.env.EMAIL_PASSWORD;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });

    const verificationUrl = `http://localhost:3000/verify-email?token=${token}`;

    const subject = "Verify your email";
    const text = `<p>Click the link below to verify your email:</p>\n
    <a href="${verificationUrl}">${verificationUrl}</a>`;

    transporter.sendMail(
      {
        from: "noreply",
        to: email,
        subject: subject,
        html: text,
      },
      (err) => {
        if (err) {
          return NextResponse.json({ err }, { status: 500 });
        }
        return NextResponse.json({ message: "Success" }, { status: 200 });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default sendVerificationEmail;
