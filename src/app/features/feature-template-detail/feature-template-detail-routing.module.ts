import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureTemplateDetailComponent } from './feature-template-detail.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Template'
    },
    children: [
      {
        path: '',
        redirectTo: 'detail'
      },
      {
        path: 'detail',
        component: FeatureTemplateDetailComponent,
        data: {
          title: 'Detail'
        }
      },
      {
        path: 'detail/:id',
        component: FeatureTemplateDetailComponent,
        data: {
          title: 'Detail'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class featureTemplateDetailRoutingModule { }
