import { sectionForm } from './formConfig-sections';


export interface formConfig {
  id: number;
  title: string;
  description: string;
  sections: sectionForm[];
}



/*    export interface sectionForm {
    title: string;
    rows: sectionRow[];
  }

   export interface sectionRow {
    fields: sectionFields[];
  }

   export interface sectionFields {
    label: string;
    type: string;
    key: string;
    value?:string;
    defaultValue?:string;
    rules: fieldRules[];
    options?: fieldOptions[];
  }

   export interface fieldRules {
    type: string;
    value?: number;
  }

  export interface fieldOptions {
    value: string;
    title: string;
  }  */
