/*
  Warnings:

  - Added the required column `known` to the `FlashCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FlashCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "known" TEXT NOT NULL
);
INSERT INTO "new_FlashCard" ("answer", "category", "id", "question") SELECT "answer", "category", "id", "question" FROM "FlashCard";
DROP TABLE "FlashCard";
ALTER TABLE "new_FlashCard" RENAME TO "FlashCard";
CREATE UNIQUE INDEX "FlashCard_question_key" ON "FlashCard"("question");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
