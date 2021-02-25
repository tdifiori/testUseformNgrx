import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { formConfig } from '../../../models/formConfig/formConfig';
import { loadTemplateDetailSuccess } from './template-detail.actions';


   const initialState: formConfig = null  ;




export const templateDetailReducer = createReducer(
  initialState,
  on(loadTemplateDetailSuccess, (state,action) => ({...action.templateDetail}))
);


