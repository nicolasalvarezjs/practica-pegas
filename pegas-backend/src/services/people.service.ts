import { model } from 'mongoose';
import { PeopleSchema } from '../models/people.schema';
import { Person } from 'src/interfaces/Person';

export const getPeople = (filter: Partial<Person> = {}) => {
    const peopleModel = model<Person>('People', PeopleSchema);
    return peopleModel.find(filter);
}

export const createPerson = (person: Person) => {
    const peopleModel = model<Person>('People', PeopleSchema);
    return peopleModel.create(person);
}