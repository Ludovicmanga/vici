import prisma from "../../prisma/prismaClient";

export const getAllFlashcards = async (req, res, next) => {
  try {
    const allCards = await prisma.flashCard.findMany();
    res.status(200).json(allCards);
  } catch (e) {
    console.log(e, ' is the error man...');
    res.send(500);
  }
};

export const createFlashCard = async (req, res, next) => {
  try {
    const { question, answer, category } = req.body;
    const user = await prisma.flashCard.create({
      data: { question, answer, category },
    });
    res.send(user);
  } catch (e) {
    console.log(e, ' is the error man...');
    res.send(500);
  }
};
