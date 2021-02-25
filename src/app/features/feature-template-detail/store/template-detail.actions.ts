import { createAction, props } from '@ngrx/store';
import { formConfig } from '../../../models/formConfig/formConfig';


export const loadTemplateDetail = createAction(
  '[TemplateDetail] Load TemplateDetail',
  props<{ id: number}>()
);

export const loadTemplateDetailSuccess = createAction(
  '[TemplateDetail] Load TemplateDetail Success',
  props<{ templateDetail: formConfig}>()
);

export const loadTemplateDetailFailure = createAction(
  '[TemplateDetail] Load TemplateDetail Failure',
  props<{ error: string }>()
);
