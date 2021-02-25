import { ApplicationState } from './../../app.states';

import { Component, OnInit } from '@angular/core';

import { formConfig } from '../../models/formConfig/formConfig';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { getTemplateList } from './../../features/feature-template-list/store/template-list.selectors';
import { loadTemplateList } from './store/template-list.actions';

@Component({
  selector: 'uf-feature-template-list',
  template: `
  <ng-container *ngIf="templateList$ | async">
    <uf-template-list   *ngFor="let form of templateList$  | async" [templateList]="form"  > </uf-template-list>
  </ng-container>
  `,
  styleUrls: ['./feature-template-list.component.css']
})




export class FeatureTemplateListComponent implements OnInit {

  templateList$: Observable<formConfig[]>;


  constructor(private store: Store<ApplicationState>) {

  }



  ngOnInit(): void {
    this.templateList$  = this.store.select(getTemplateList);

    this.store.dispatch(loadTemplateList());
  }

}
