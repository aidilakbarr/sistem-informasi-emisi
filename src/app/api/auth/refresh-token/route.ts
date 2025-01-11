import { generateToken, verifyRefreshToken } from "@/lib/jwt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const cookies = req.cookies;
  const refreshToken = cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      {
        message: "refresh token not found",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const payload = verifyRefreshToken(refreshToken) as { id: string };

    const user = await prisma.user.findUnique({
      where: {
        id: payload.id,
        refreshtoken: refreshToken,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid refresh token",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = generateToken(user);

    return NextResponse.json(
      {
        message: "Logged In Successfully",
        accessToken,
      },
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
