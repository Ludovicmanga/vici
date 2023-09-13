import app from "../src/app";
import request from "supertest";
import prisma from "../prisma/prismaClient";

describe("Flash cards API", () => {
  it("GET -> get a list of the existing flash cards", async () => {
    const response = await request(app)
      .get("/flash-cards/all")
      .expect("Content-type", /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    if (response.body.length > 0) {
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            question: expect.any(String),
            answer: expect.any(String),
            category: expect.any(String),
          }),
        ])
      );
    }
  });

  it("POST -> Create a flash card", async () => {
    const response = await request(app)
      .post("/flash-cards/create")
      .send({
        question: "test question",
        answer: "test answer",
        category: "test category",
      })
      .expect("Content-type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        question: expect.any(String),
        answer: expect.any(String),
        category: expect.any(String),
      })
    );

    await prisma.flashCard.delete({
      where: {
        question: "test question",
      },
    });
  });
});
