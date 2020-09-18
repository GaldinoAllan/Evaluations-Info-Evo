import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationsRoutingModule } from './evaluations-routing.module';
import { EvaluationsInfoComponent } from './evaluations-info/evaluations-info.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [EvaluationsInfoComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    EvaluationsRoutingModule
  ]
})
export class EvaluationsModule { }
