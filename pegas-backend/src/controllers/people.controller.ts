import { Request, Response } from "express";
import { getPeople, createPerson } from "../services/people.service";
import { Person } from "../interfaces/Person";
import { internalServerError } from "../exceptions/errorMessages";

export const getPeopleController = async (
  request: Request,
  response: Response
) => {
  try {
    const people = await getPeople();
    response.status(200).send(people);
  } catch (error: any) {
    response.send(internalServerError);
  }
};

export const postPeopleController = async (
  request: Request<any, any, Person>,
  response: Response
) => {
  try {
    const newPerson = await createPerson(request.body);
    response.status(201).send(newPerson);
  } catch (error: any) {
    response.status(500).send(internalServerError);
  }
};
