import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const sendMessage = (name: string, email: string, message: string) => {
  const userEmail = process.env.EMAIL_USER;
  const userPassword = process.env.EMAIL_PASSWORD;
  const myEmail = process.env.MY_EMAIL;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });

    transporter.sendMail(
      {
        from: name,
        to: myEmail,
        subject: email,
        text: message,
      },
      (err) => {
        if (err) {
          return NextResponse.json({ err }, { status: 500 });
        }
        return NextResponse.json(
          { message: "Message Success" },
          { status: 200 }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default sendMessage;
