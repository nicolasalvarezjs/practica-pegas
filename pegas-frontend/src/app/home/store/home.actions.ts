import { createAction, props } from '@ngrx/store';
import { Person } from 'src/app/interfaces/Person';

export const addPeople = createAction('[PEOPLE] Add People', props<any>());
export const getPeopleStart = createAction('[PEOPLE] Get People Start', props<any>());