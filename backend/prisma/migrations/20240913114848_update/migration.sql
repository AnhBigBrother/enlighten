/*
  Warnings:

  - You are about to drop the `refresh_tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "refresh_tokens" DROP CONSTRAINT "refresh_tokens_userEmail_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "refresh_token" TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" DROP DEFAULT;

-- DropTable
DROP TABLE "refresh_tokens";
