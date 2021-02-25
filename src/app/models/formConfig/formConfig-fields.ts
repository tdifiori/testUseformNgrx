import { fieldRules } from './formConfig-fields-rules';
import { fieldOptions } from './formConfig-fields-options';

export interface sectionFields {
  label: string;
  type: string;
  key: string;
  value?: string; 
  defaultValue?: string; 
  rules: fieldRules[];
  options?: fieldOptions[];
}