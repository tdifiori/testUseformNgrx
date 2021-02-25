
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, async } from 'rxjs';
import { ApplicationState } from '../../app.states';
import { ActivatedRoute } from '@angular/router';
import { formConfig } from '../../models/formConfig/formConfig';
import { getTemplateDetail } from './store/template-detail.selectors';
import { loadTemplateDetail } from './../feature-template-detail/store/template-detail.actions';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';



@Component({
  selector: 'uf-feature-template-detail',
  template: `
  <uf-template-detail [detail]="TemplateDetail$ | async"></uf-template-detail>
  `,
  styleUrls: ['./feature-template-detail.component.css']

})
export class FeatureTemplateDetailComponent implements OnInit {

  TemplateDetail$: Observable<formConfig>;
  templateDetail: any;
  validators = [];


  reactiveForm: FormGroup = new FormGroup({});



    constructor(
      private store: Store<ApplicationState>,
      private route: ActivatedRoute,
      private fb: FormBuilder
      ) {
        this.TemplateDetail$  = this.store.select(getTemplateDetail);

        let id:number;
          this.route.params.subscribe( params => {
            id = params['id'];
            this.store.dispatch(loadTemplateDetail({id}));

            this.TemplateDetail$.subscribe( (x:formConfig) => console.log("from cunstructor  ", x) );

          });





    }

    ngOnInit(): void {

      // funzione che mi converte il validatore del json in un validatorFn
      function validatorFactory(r): ValidatorFn {
        if (r.value) {
          return Validators[r.type](r.value);
        }
      return Validators[r.type];
      }


    }







           // let group = {};
// creo il form
/*           templateDetail.sections.forEach(sections => {
            sections.rows.forEach(row => {
              row.fields.forEach(field => {

                field.rules.forEach(rule => {
                 let x =  validatorFactory(rule)
                 this.validators.push(x);
                })

                group[field.key] = [field.defaultValue, this.validators]
                  this.reactiveForm = this.fb.group(group);
                    this.validators = [];
              });
                this.reactiveForm.updateValueAndValidity();
            })
          });
*/


        //console.log(this.reactiveForm.controls);


}
