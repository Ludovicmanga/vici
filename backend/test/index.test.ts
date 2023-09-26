import app from "../src/app";
import request from "supertest";
import prisma from "../prisma/prismaClient";

describe("Flash cards API", () => {
/*   it("GET -> get a list of the existing flash cards", async () => {
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
  }); */

/*   it("POST -> Create, then Delete a flash card", async () => {
    const createResponse = await request(app)
      .post("/flash-cards/create")
      .send({
        question: "test question",
        answer: "test answer",
        category: "test category",
      })
      .expect("Content-type", /json/)
      .expect(200);

    expect(createResponse.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        question: expect.any(String),
        answer: expect.any(String),
        category: expect.any(String),
      })
    );

    await request(app)
      .delete("/flash-cards/delete")
      .send({
        id: createResponse.body.id,
      })
      .expect(204);
  }); */

/*   it("PUT -> Create, then update, then delete a flash card", async () => {

    // create

    const createResponse = await request(app)
      .post("/flash-cards/create")
      .send({
        question: "test question",
        answer: "test answer",
        category: "test category",
      })
      .expect("Content-type", /json/)
      .expect(200);

    expect(createResponse.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        question: expect.any(String),
        answer: expect.any(String),
        category: expect.any(String),
      })
    );

    // update

    const updatedResponse = await request(app)
      .put("/flash-cards/update")
      .send({
        cardToUpdate: {
          id: createResponse.body.id,
          question: "updated question",
          answer: "updated answer",
          category: "updated category",
        }
      })
      .expect("Content-type", /json/)
      .expect(200);

    expect(updatedResponse.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        question: expect.any(String),
        answer: expect.any(String),
        category: expect.any(String),
      })
    );

    // delete

    await request(app)
    .delete("/flash-cards/delete")
    .send({
      id: createResponse.body.id,
    })
    .expect(204);
  }); */

  it("signup, then login, then delete user", async () => {

    // signup 
/*    const createdResponse = await request(app)
      .post("/auth/sign-up")
      .send({
        email: 'testuser@gmail.com',
        password: '2707'
      })
      .expect("Content-type", /json/)
      .expect(200);

      expect(createdResponse.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          password: expect.any(String),
        })
      );  */

      //login

      const loginResponse = await request(app)
      .post("/auth/login")
      .send({
        email: 'testuser@gmail.com',
        password: '2707'
      })
      .expect("Content-type", /json/)
      .expect(200);

      expect(loginResponse.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          password: expect.any(String),
        })
      );

      // check if authenticated
/*       const checkAuthResponse = await request(app)
      .post("/auth/check-auth");

      expect(checkAuthResponse.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          password: expect.any(String),
        })
      ) */

      //logout

      const logoutResponse = await request(app)
      .post("/auth/logout")
      .expect("Content-type", /json/)
      .expect(200);

      expect(logoutResponse.body).toEqual(
        expect.objectContaining({
          loggedOut: expect.any(Boolean),
        })
      );

      // check if is well logged out

      // delete user
    
      const deleteResponse = await request(app)
      .post("/auth/delete-user")
      .send({
        email: 'testuser@gmail.com',
      })

     expect(deleteResponse.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          password: expect.any(String),
        })
      );
  })
});
