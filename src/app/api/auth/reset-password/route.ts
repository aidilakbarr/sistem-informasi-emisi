import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { otp, newPassword } = body;
    if (!otp || !newPassword) {
      return NextResponse.json(
        { message: "field is required" },
        { status: 400 }
      );
    }

    const userOtp = await prisma.user.findFirst({
      where: {
        resetotp: otp,
        resetotpexpired: {
          gt: new Date(), // Bandingkan dengan waktu saat ini
        },
      },
    });

    if (!userOtp) {
      return NextResponse.json(
        {
          message: "OTP Invalid",
        },
        {
          status: 401,
        }
      );
    }

    const newHashPassword = await argon2.hash(newPassword);

    await prisma.user.update({
      where: { id: userOtp.id },
      data: {
        password: newHashPassword,
      },
    });

    return NextResponse.json(
      { message: "Success" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
