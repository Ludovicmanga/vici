/*
  Warnings:

  - You are about to alter the column `known` on the `FlashCard` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FlashCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "known" INTEGER NOT NULL
);
INSERT INTO "new_FlashCard" ("answer", "category", "id", "known", "question") SELECT "answer", "category", "id", "known", "question" FROM "FlashCard";
DROP TABLE "FlashCard";
ALTER TABLE "new_FlashCard" RENAME TO "FlashCard";
CREATE UNIQUE INDEX "FlashCard_question_key" ON "FlashCard"("question");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
