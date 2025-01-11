import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "@/lib/jwt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, token } = body;

  console.log({ email, token });

  console.log(typeof email);

  if (!token || !email || email == null) {
    return NextResponse.json(
      { message: "Token or Email not found" },
      { status: 400 }
    );
  }

  if (email) {
    return NextResponse.json({ message: "puki" }, { status: 400 });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    if (user.isemailverified) {
      return NextResponse.json(
        { message: "email is verified" },
        { status: 200 }
      );
    }

    if (token !== user.verificationtoken) {
      console.log({
        token: token,
        tokenDB: user.verificationtoken,
      });

      return NextResponse.json({ message: "Token invalid" }, { status: 400 });
    }

    await prisma.user.update({
      where: { email },
      data: {
        isemailverified: true,
        verificationtoken: null,
      },
    });

    const JWTToken = generateToken(user);

    const name = user.username;

    return NextResponse.json({ user, name, JWTToken }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
