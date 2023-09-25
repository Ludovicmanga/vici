import prisma from "../../prisma/prismaClient";

export const getAllFlashcards = async (req, res, next) => {
  try {
    const allCards = await prisma.flashCard.findMany();
    res.status(200).json(allCards);
  } catch (e) {
    console.log(e, " is the error man...");
    res.send(500);
  }
};

export const createFlashCard = async (req, res, next) => {
  try {
     const { question, answer, category } = req.body;
    const flashCard = await prisma.flashCard.create({
      data: { question, answer, category, known: 1 },
    });
    res.send(flashCard);
  } catch (e) {
    console.log(e, " is the error man...");
    res.send(500);
  }
};

export const deleteFlashCard = async (req, res, next) => {
  try {
    const { id } = req.body;
    const deleted = await prisma.flashCard.delete({
    where: {
        id,
    }});
    if (deleted) {
        console.log(deleted);
        res.send(204);
    }
  } catch (e) {
    console.log(e, " is the error man...");
    res.send(500);
  }
};

export const updateFlashCard = async (req, res, next) => {
  try {
    const { cardToUpdate } = req.body;
    const updatedCard = await prisma.flashCard.update({
      where: {
        id: cardToUpdate.id,
      },
      data: { ...cardToUpdate }
    })
    res.status(200).json(updatedCard);
  } catch (e) {
    console.log(e, " is the error man...");
    res.send(500);
  }
};