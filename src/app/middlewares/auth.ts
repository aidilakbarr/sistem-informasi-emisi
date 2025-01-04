import { verifyToken } from "@/utils/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function authenticate(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");

  // Cek apakah header Authorization ada dan memiliki format Bearer <token>
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { error: "Authorization token missing or invalid" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1]; // Ambil token setelah 'Bearer '

  // Verifikasi token
  const decoded = verifyToken(token);
  if (!decoded) {
    console.log("kontol", decoded);

    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 401 }
    );
  }

  // Jika valid, token berhasil diverifikasi dan decoded
  // Kamu bisa menambahkan informasi pengguna yang didekodekan ke request context
  //   request.user = decoded;

  return null; // Lolos autentikasi, lanjutkan request
}
