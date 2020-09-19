import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationsInfoComponent } from './evaluations-info/evaluations-info.component';
import { LastFiveEvaluationsInfoComponent } from './last-five-evaluations-info/last-five-evaluations-info.component';
import { CommonNamesComponent } from './common-names/common-names.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluationsInfoComponent,
  },
  {
    path: 'lastfive',
    component: LastFiveEvaluationsInfoComponent,
  },
  {
    path: 'commonnames',
    component: CommonNamesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationsRoutingModule { }
