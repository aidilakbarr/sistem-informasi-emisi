-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isemailverified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationtoken" TEXT;
