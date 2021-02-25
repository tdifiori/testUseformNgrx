import { Component, OnInit, Input } from '@angular/core';
import { sectionFields } from '../../../../../models/formConfig/formConfig-fields';

@Component({
  selector: 'uf-input-text',
  template: `
  <input type="{{input.type}}" class="form-control form-control-sm" id="{{input.key}}" placeholder="{{input.label}}">
  `,
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() input:sectionFields;

  constructor() { }

  ngOnInit(): void {

  }

}
