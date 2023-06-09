import { createSelector } from '@ngrx/store';
import { State } from './home.reducer';

export const selectPeopleFeature = (state: any) => state.home;

export const selectPeople = createSelector(
    selectPeopleFeature,
    (state: State) => state.people
);
  

