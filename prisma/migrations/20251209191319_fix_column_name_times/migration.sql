/*
  Warnings:

  - You are about to drop the column `tomes` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "tomes",
ADD COLUMN     "times" TEXT[] DEFAULT ARRAY[]::TEXT[];
