import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'evaluationinfo',
    // Lazy Loading
    loadChildren: () => import('./evaluations/evaluations.module').then(m => m.EvaluationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
