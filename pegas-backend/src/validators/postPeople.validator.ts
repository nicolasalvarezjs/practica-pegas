import Joi from "joi";
import { FieldsAreRequired } from "../exceptions/exceptions";
import { Person } from "../interfaces/Person";

const validatorSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  age: Joi.number().required().min(1).max(120),
  gender: Joi.string().required(),
  isBreastfeedingOrPregnant: Joi.boolean(),
  phone: Joi.string().required(),
  birthDate: Joi.date().required(),
});

export const postPeopleValidator = (body: Person) => {
  const { error: thereIsAnError } = validatorSchema.validate(body);
  if (thereIsAnError) {
    const { details } = thereIsAnError;
    const [detail] = details;
    throw new FieldsAreRequired(detail.message);
  }
  return null;
};
