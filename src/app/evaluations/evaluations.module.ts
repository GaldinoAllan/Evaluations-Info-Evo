import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationsInfoComponent } from './evaluations-info/evaluations-info.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LastFiveEvaluationsInfoComponent } from './last-five-evaluations-info/last-five-evaluations-info.component';
import { CommonNamesComponent } from './common-names/common-names.component';

@NgModule({
  declarations: [EvaluationsInfoComponent, LastFiveEvaluationsInfoComponent, CommonNamesComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    EvaluationsRoutingModule
  ]
})
export class EvaluationsModule { }
