import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap } from 'rxjs/operators';
import { PeopleService } from "src/app/services/people.service";
import { addPeople, getPeopleList } from "./home.actions";
import { Person } from "src/app/interfaces/Person";

@Injectable()
export class HomeEffects {
    getPeopleList$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(getPeopleList),
            concatMap(() => {
                return this.peopleService.getPeople().pipe(
                    map((people: Person[]) => {
                        return addPeople({ people })
                    })
                )
            })
          ),
        { dispatch: true }
    );

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) {}
}
