import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    // Cobalah untuk mengambil data dari salah satu tabel, misalnya tabel User
    const users = await prisma.user.findMany();
    console.log("Connection successful, users:", users);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
