
//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FeatureTemplateListRoutingModule } from './feature-template-list-routing.module';


//component
import { FeatureTemplateListComponent } from './feature-template-list.component';
import { TemplateListComponent } from '../../shared/template-list/template-list.component';




@NgModule({
  declarations: [
    FeatureTemplateListComponent,
    TemplateListComponent

  ],
  imports: [
    CommonModule,
    FeatureTemplateListRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
/*     StoreModule.forFeature( 'templateList', reducers.templateListReducer ),
    StoreModule.forFeature( 'templatetest', reducers.xtemplateListReducer ),
    EffectsModule.forRoot(effects), */
  ]
})
export class FeatureTemplateListModule {




 }
