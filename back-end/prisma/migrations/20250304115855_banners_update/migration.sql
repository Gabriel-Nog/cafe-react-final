/*
  Warnings:

  - Added the required column `description` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
