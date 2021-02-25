import { Component, OnInit, Input } from '@angular/core';
import { sectionFields } from '../../../models/formConfig/formConfig-fields';

@Component({
  selector: 'uf-template-controls',
  template: `

  <div class="col">
  <uf-input-text *ngIf="field" [input]="field" ></uf-input-text>
  </div>
  <!--<div class="container">
  <div class="row">

    <div class="col">
        <uf-input-text *ngIf="field" [input]="field" ></uf-input-text>
    </div>

  </div>
</div>-->
  `,
  styleUrls: ['./template-controls.component.css']
})
export class TemplateControlsComponent implements OnInit {
  @Input() field:sectionFields;

  constructor() { }

  ngOnInit(): void {
  }

}

