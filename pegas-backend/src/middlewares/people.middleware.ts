import { Request, Response } from "express";
import { getPeople } from "../services/people.service";
import { Person } from "../interfaces/Person";
import { postPeopleValidator } from "../validators/postPeople.validator";
import { PhoneAlreadyExist } from "../exceptions/exceptions";

export const fieldsAreRequired = (
  request: Request,
  response: Response,
  next: Function
) => {
  try {
    postPeopleValidator(request.body);
    next();
  } catch (error: any) {
    response.status(400).send(error.message);
  }
};

export const phoneIsAlreadyUse = async (
  { body }: Request<any, any, Person>,
  response: Response,
  next: Function
) => {
  try {
    const [person] = await getPeople({ phone: body.phone });
    if (person) {
      throw new PhoneAlreadyExist();
    }
    next();
  } catch (error: any) {
    response.status(400).send(error.message);
  }
};
