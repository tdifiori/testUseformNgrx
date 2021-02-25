import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { formConfig } from '../../../models/formConfig/formConfig';
import { switchMap, map, catchError } from 'rxjs/operators';
import { loadTemplateList , loadTemplateListSuccess, loadTemplateListFailure } from './template-list.actions';
import { of } from 'rxjs';



@Injectable()
export class TemplateListEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
    ) {}

    @Effect()
    LoadTemplateList$ = createEffect( () => this.actions$.pipe(
      ofType(loadTemplateList),
      switchMap(
        () => this.http.get<formConfig[]>('http://localhost:3000/formConfigMock')
        .pipe(
          map(templateList => loadTemplateListSuccess({templateList}) ),
          catchError((error) => of(loadTemplateListFailure(error)))
        )
      )
    )
);







}

