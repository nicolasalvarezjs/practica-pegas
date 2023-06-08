import { ActionReducerMap } from '@ngrx/store';
import * as fromHome from '../home/store/home.reducer';

export interface AppState {
    people: fromHome.State
}

export const appReducer: ActionReducerMap<AppState> = {
    people: fromHome.homeReducer
}