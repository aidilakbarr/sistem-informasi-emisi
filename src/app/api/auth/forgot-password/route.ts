import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import sendEmail from "@/utils/sendEmail";
import { generateOTP, generateOTPExpired } from "@/utils/generateOTP";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const emailSchema = z.object({
    email: z.string().email("Invalid email format"),
  });

  try {
    const body = await req.json();

    const parsedData = emailSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          error: parsedData.error.errors,
        },
        {
          status: 400,
        }
      );
    }

    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: "Email Empty" }, { status: 400 });
    }

    // req.emailUser = email;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Email not found",
        },
        {
          status: 400,
        }
      );
    }

    // Generate OTP and save it to the database
    const OTP: string = generateOTP();
    const OTPExpired: Date = generateOTPExpired();
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        resetotp: OTP,
        resetotpexpired: OTPExpired,
      },
    });

    // Function Send Email OTP
    sendEmail(user.username, OTP, email);
    return NextResponse.json({ message: "OTP Sending..." }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
