import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import argon2 from "argon2";
import { generateToken } from "@/utils/jwt";

const prisma = new PrismaClient();
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) {
      return NextResponse.json(
        { error: "All field are required" },
        { status: 400 }
      );
    }

    const user = await prisma?.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "Email not registered",
        },
        { status: 400 }
      );
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return NextResponse.json(
        {
          error: "Wrong password",
        },
        {
          status: 400,
        }
      );
    }

    const token = generateToken(user);
    const name = user.username;

    return NextResponse.json(
      { message: "Login success", name, token },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
