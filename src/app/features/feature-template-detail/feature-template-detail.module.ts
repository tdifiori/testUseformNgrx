import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { featureTemplateDetailRoutingModule } from './feature-template-detail-routing.module';

import { ReactiveFormsModule  } from '@angular/forms';


import { FeatureTemplateDetailComponent } from './feature-template-detail.component';
import { TemplateDetailComponent } from '../../shared/template-detail/template-detail.component';
import { TemplateSectionComponent } from '../../shared/template/template-section/template-section.component';
import { TemplateHeaderComponent } from '../../shared/template/template-header/template-header.component';
import { TemplateRowComponent } from '../../shared/template/template-row/template-row.component';
import { TemplateControlsComponent } from '../../shared/template/template-controls/template-controls.component';
import { InputTextComponent } from '../../shared/template/template-controls/controls/input-text/input-text.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FeatureTemplateDetailComponent,
    TemplateDetailComponent,
    TemplateSectionComponent,
    TemplateHeaderComponent,
    TemplateRowComponent,
    TemplateControlsComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    featureTemplateDetailRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureTemplateDetailModule { }

