-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tomes" TEXT[] DEFAULT ARRAY[]::TEXT[];
