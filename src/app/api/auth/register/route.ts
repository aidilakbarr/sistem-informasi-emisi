import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import argon2 from "argon2";
import * as z from "zod";
import { generateRefreshToken, generateToken } from "@/utils/jwt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const registerSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters long"),
  });
  try {
    const body = await req.json();

    const parsedData = registerSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors },
        { status: 400 }
      );
    }

    const { username, email, password, confPassword } = body;

    if (!username || !email || !password || !confPassword) {
      return NextResponse.json(
        {
          error: "All field are required",
        },
        {
          status: 400,
        }
      );
    }

    if (password !== confPassword) {
      return NextResponse.json(
        {
          error: "Passwords do not match",
        },
        {
          status: 400,
        }
      );
    }

    // Cek apakah email sudah terdaftar di database
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email is already taken" },
        { status: 400 }
      );
    }

    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshtoken: refreshToken },
    });

    return NextResponse.json({ user, token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
