
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureTemplateListComponent } from './feature-template-list.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Template'
    },
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: FeatureTemplateListComponent, // dentro questo c'è il componente list
        data: {
          title: 'List'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureTemplateListRoutingModule { }
