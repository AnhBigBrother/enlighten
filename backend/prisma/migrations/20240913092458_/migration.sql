/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `refresh_tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `refresh_tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "refresh_tokens" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_userEmail_key" ON "refresh_tokens"("userEmail");

-- AddForeignKey
ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
