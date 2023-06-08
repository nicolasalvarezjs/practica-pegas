import { Request, Response } from "express";
import { getPeople, createPerson } from "../services/people.service";
import { Person } from "src/interfaces/Person";

export const getPeopleController = async (request: Request, response: Response) => {
    try {
        const people = await getPeople({ name: 'nicolas' });
        response.status(200).send(people);
    } catch (error: any) {
        console.log(error);
        response.send('ok not');
    }
}

export const postPeopleController = async (request: Request<any,any,Person>, response: Response) => {
    try {
        const newPerson = await createPerson(request.body);
        response.status(201).send(newPerson);
    } catch (error: any) {
        console.log(error);
        response.send('ok not');
    }
}