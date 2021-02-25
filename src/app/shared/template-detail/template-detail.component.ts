import { Component, OnInit, Input } from '@angular/core';
import { formConfig } from '../../models/formConfig/formConfig';

@Component({
  selector: 'uf-template-detail',
  template: `
  <div class="animated fadeIn">
  <uf-template-header *ngIf="detail" [header]="detail" ></uf-template-header>


   <form *ngIf="detail"  class="form-horizontal" action="" method="post">
     <uf-template-section  [section]="section" *ngFor="let section of detail.sections"  ></uf-template-section>
   </form>
  </div>

  <hr>
<pre><code>{{detail | json}}</code></pre>
  `,
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {

  @Input() detail:formConfig;


  constructor() {

  }

  ngOnInit(): void {

  }


}
