import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const sendEmail = (user: string, otp: string, email: string) => {
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

    const subject = "Kode OTP Anda untuk Reset Password";
    const text = `Halo ${user} \nKami menerima permintaan untuk verifikasi akun Anda. Untuk melanjutkan, masukkan kode OTP berikut: \nKode OTP: ${otp}\nHarap dicatat bahwa kode ini berlaku selama 5 menit dan hanya dapat digunakan sekali. \nJika Anda tidak meminta verifikasi ini, abaikan email ini.\nTerima kasih,\nEmisiku`;

    transporter.sendMail(
      {
        from: "noreply",
        to: email,
        subject: subject,
        text: text,
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

export default sendEmail;
