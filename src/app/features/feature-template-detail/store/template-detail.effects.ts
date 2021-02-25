import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { formConfig } from '../../../models/formConfig/formConfig';
import { switchMap, map, catchError } from 'rxjs/operators';
import { loadTemplateDetail , loadTemplateDetailSuccess, loadTemplateDetailFailure } from './template-detail.actions';
import { of } from 'rxjs';



@Injectable()
export class TemplateDetailEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
    ) {}

    @Effect()
    loadTemplateDetail$ = createEffect( () => this.actions$.pipe(
      ofType(loadTemplateDetail),
      switchMap(
        (detail) => this.http.get<formConfig>(`http://localhost:3000/formConfigMock/${detail.id}`)
        .pipe(
          map((templateDetail) => loadTemplateDetailSuccess({templateDetail}) ),
          catchError((error) => of(loadTemplateDetailFailure(error)))
        )
      )
    )
);


}


