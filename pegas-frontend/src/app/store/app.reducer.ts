import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../pages/people-list/store/home.reducer';

export interface AppState {
    home: fromHome.State
}

export const appReducer: ActionReducerMap<AppState> = {
    home: fromHome.homeReducer
}