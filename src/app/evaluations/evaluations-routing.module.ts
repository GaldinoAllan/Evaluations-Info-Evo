import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationsInfoComponent } from './evaluations-info/evaluations-info.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluationsInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationsRoutingModule { }
