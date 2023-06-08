import request from "supertest";
import app from "../src/index";
import { removePerson } from "../src/services/people.service";
import { phoneIsAlreadyMessage } from "../src/exceptions/errorMessages";

const path = "/api/people";
const personToCreateValid = {
  name: "test",
  lastname: "lasttest",
  age: "30",
  gender: "MALE",
  isBreastfeedingOrPregnant: false,
  phone: "1234567891",
  birthDate: "04/13/1993",
};
let personCreated: any;

afterAll(async () => {
  await removePerson(personCreated?._id);
});

describe("ApiRest test enpoints end to end", () => {
  test("POST people should return a successful response", async () => {
    const response = await request(app).post(path).send(personToCreateValid);
    personCreated = response.body;
    expect(response.status).toBe(201);
  });

  test("POST people should return an error because there is not name in body", async () => {
    const response = await request(app)
      .post(path)
      .send({ ...personToCreateValid, name: undefined });
    expect(response.status).toBe(400);
  });

  test("POST people should return an error because phone is already exist", async () => {
    const response = await request(app).post(path).send(personToCreateValid);
    expect(response.status).toBe(400);
    expect(response.text).toBe(phoneIsAlreadyMessage);
  });

  test("GET people should return a successful response", async () => {
    const response = await request(app).get(path);
    expect(response.status).toBe(200);
  });
});
