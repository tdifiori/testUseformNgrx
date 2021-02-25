import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { formConfig } from '../../../models/formConfig/formConfig';
import { loadTemplateListSuccess } from './template-list.actions';




   const initialState: formConfig[] = [];




export const templateListReducer = createReducer(
  initialState,
  on(loadTemplateListSuccess, (state,action) => [...action.templateList])
);


