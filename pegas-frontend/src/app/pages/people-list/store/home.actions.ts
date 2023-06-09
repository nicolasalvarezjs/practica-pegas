import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/interfaces/Person';

export const addPeople = createAction('[PEOPLE] Add People', props<{ people: Person[] }>());
export const getPeopleList = createAction('[PEOPLE] Get People Start');