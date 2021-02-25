import { createAction, props } from '@ngrx/store';
import { formConfig } from '../../../models/formConfig/formConfig';



export const loadTemplateList = createAction(
  '[TemplateList] Load TemplateLists'
);

export const loadTemplateListSuccess = createAction(
  '[TemplateList] Load TemplateLists Success',
  props<{ templateList: formConfig[]}>()
);

export const loadTemplateListFailure = createAction(
  '[TemplateList] Load TemplateLists Failure',
  props<{ error: string }>()
);


