import { authenticate } from "@/app/middlewares/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
  try {
    const authResponse = authenticate(req);
    if (authResponse) return authResponse;
    const user = await prisma?.user.findMany();

    if (!user || user.length === 0) {
      return NextResponse.json(
        {
          error: "Tidak ada data",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { user },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
