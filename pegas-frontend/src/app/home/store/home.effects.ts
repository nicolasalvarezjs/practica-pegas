import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { PeopleService } from "src/app/services/people.service";
import { addPeople, getPeopleStart } from "./home.actions";

@Injectable()
export class HomeEffects {
    loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPeopleStart),
      mergeMap(() =>
        this.peopleService.getPeople().pipe(
          map((data) => addPeople(data))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private peopleService: PeopleService
  ) {}
}
