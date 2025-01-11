import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { otp, newPassword, email } = body;
    if (!otp || !newPassword) {
      return NextResponse.json(
        { message: "field is required" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json({ message: "Email empty" }, { status: 400 });
    }

    const userOtp = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!userOtp) {
      return NextResponse.json(
        {
          message: "Email not found",
        },
        {
          status: 401,
        }
      );
    }

    if (otp !== userOtp.resetotp) {
      return NextResponse.json({ message: "OTP Invalid" }, { status: 400 });
    }

    if (
      userOtp.resetotpexpired === null ||
      userOtp.resetotpexpired < new Date()
    ) {
      return NextResponse.json({ message: "OTP Expired" }, { status: 400 });
    }

    const newHashPassword = await argon2.hash(newPassword);

    await prisma.user.update({
      where: { id: userOtp.id },
      data: {
        password: newHashPassword,
        resetotp: null,
        resetotpexpired: null,
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
