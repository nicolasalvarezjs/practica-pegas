import { model } from "mongoose";
import { PeopleSchema } from "../models/people.schema";
import { Person } from "src/interfaces/Person";

const peopleModel = model<Person>("People", PeopleSchema);

export const getPeople = (filter: Partial<Person> = {}): Promise<Person[]> =>
  peopleModel.find(filter);
export const createPerson = (person: Person): Promise<Person> =>
  peopleModel.create(person);
export const removePerson = (id: string): Promise<Person | null> =>
  peopleModel.findByIdAndDelete(id);
