import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { Person } from 'src/app/interfaces/Person';

export interface State {
    people: Person[];
}

const initialState: State = {
    people: []
}


const _homeReducer = createReducer(
    initialState,
    on(HomeActions.getPeopleList, (state) => {
      return state
    }),
    on(HomeActions.addPeople, (state, { people }) => {
        return {
            ...state,
            people: [ ...people ]
        }
      }),
  );

export function homeReducer(state: any, action: any) {
    return _homeReducer(state, action);
}