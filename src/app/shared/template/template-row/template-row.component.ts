import { Component, OnInit, Input } from '@angular/core';
import { sectionRow } from '../../../models/formConfig/formConfig-rows';

@Component({
  selector: 'uf-template-row',
  template: `
  <div class="container">
    <div class="row">
        <uf-template-controls *ngFor="let field of row.fields" [field]="field"></uf-template-controls>
    </div>
  </div>
  `,
  styleUrls: ['./template-row.component.css']
})
export class TemplateRowComponent implements OnInit {

  @Input() row:sectionRow;

  constructor() { }

  ngOnInit(): void {


  }

}
