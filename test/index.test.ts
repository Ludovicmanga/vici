import app from "../src/index";
import request from "supertest";

describe("Flash cards API", () => {
  it("We want to be able to get a list of the existing flash cards", () => {
    return request(app)
      .get("/flash-cards/all")
      .expect("Content-type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
            }),
          ])
        );
      });
  });
});
