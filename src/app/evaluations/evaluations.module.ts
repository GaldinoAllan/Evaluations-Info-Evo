import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationsInfoComponent } from './evaluations-info/evaluations-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LastFiveEvaluationsInfoComponent } from './last-five-evaluations-info/last-five-evaluations-info.component';

@NgModule({
  declarations: [EvaluationsInfoComponent, LastFiveEvaluationsInfoComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    EvaluationsRoutingModule
  ]
})
export class EvaluationsModule { }
