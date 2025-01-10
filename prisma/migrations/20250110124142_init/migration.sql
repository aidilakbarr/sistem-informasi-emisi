-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resettoken" TEXT,
ADD COLUMN     "resettokenexpired" TEXT;
