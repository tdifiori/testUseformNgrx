import { formConfig } from './models/formConfig/formConfig';
import { ActionReducerMap } from '@ngrx/store';

// reducer
import * as fromfeatureTemplateList from './features/feature-template-list/store/template-list.reducer';
import * as fromfeatureTemplateDetail from './features/feature-template-detail/store/template-detail.reducer';


// effect
import { TemplateListEffects } from './features/feature-template-list/store/template-list.effects';
import { TemplateDetailEffects } from './features/feature-template-detail/store';



/**
 * Dichiarazione interfaccia dello stato applicativo
 */
export interface ApplicationState {
  templateList: formConfig[],
  templateDetail: formConfig


}


/**
 * Dichiarazione struttura dello stato applicativo
 */
export const reducers: ActionReducerMap<ApplicationState> = {
  templateList: fromfeatureTemplateList.templateListReducer,
  templateDetail: fromfeatureTemplateDetail.templateDetailReducer
};




export const effects: any[] = [
  TemplateListEffects,
  TemplateDetailEffects
];


