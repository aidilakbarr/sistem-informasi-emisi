import { verifyToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const authorizationHeader = req.headers.get("Authorization");

    if (!authorizationHeader) {
      return NextResponse.json(
        { message: "Authorization Denied" },
        { status: 400 }
      );
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { message: "Token is missing" },
        { status: 400 }
      );
    }

    const isValid = verifyToken(token);

    if (!isValid) {
      return NextResponse.json({ message: "Token denied" }, { status: 400 });
    }

    if (!(typeof isValid !== "string") || !("userIdPayload" in isValid)) {
      return NextResponse.json({});
    }

    const userId = isValid.userIdPayload;

    const body = await req.json();

    if (typeof body !== "object" || Object.keys(body).length <= 0) {
      return NextResponse.json({
        message: "Minimal butuh satu input yang di isi",
      });
    }

    const savedActivity = await prisma.user.create({
      data: {
        userId,
      },
    });

    return NextResponse.json({ body });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
