/*
  Warnings:

  - Made the column `description` on table `Todo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Todo` MODIFY `description` VARCHAR(255) NOT NULL;
