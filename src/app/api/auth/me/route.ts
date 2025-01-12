import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
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

    return NextResponse.json({ response: isValid }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
}
