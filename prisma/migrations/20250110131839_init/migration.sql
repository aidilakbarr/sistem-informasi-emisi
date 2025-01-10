/*
  Warnings:

  - You are about to drop the column `resettoken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resettokenexpired` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "resettoken",
DROP COLUMN "resettokenexpired";
