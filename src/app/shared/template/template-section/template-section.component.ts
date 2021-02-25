import { Component, OnInit, Input } from '@angular/core';
import { sectionForm } from '../../../models/formConfig/formConfig-sections';

@Component({
  selector: 'uf-template-section',
  template: `
  <div class="card">
   <div class="card-header"><strong>{{section.title}}</strong></div>
   <div class="card-body">

   <div *ngIf="section" class="form-group row">

    <uf-template-row  *ngFor="let row of section.rows" [row]="row"></uf-template-row>

  </div>

  </div>
  <div class="card-footer">
  <button class="btn btn-sm btn-primary" type="submit"> Submit</button>
  <button class="btn btn-sm btn-danger" type="reset"> Reset</button>
  </div>

  `,
  styleUrls: ['./template-section.component.css']
})
export class TemplateSectionComponent implements OnInit {

  @Input() section:sectionForm;

  constructor() { }

  ngOnInit(): void {
    console.log("from section ",this.section);
  }

}
