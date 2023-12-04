import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationBackOfficeRoutingModule } from './reclamation-back-office-routing.module';
import { ReclamationListBackOfficeComponent } from '../component/reclamation-list-back-office/reclamation-list-back-office.component';
import { FormsModule } from '@angular/forms';
import { HoverEffectReclamationDirective } from '../hover-effect-reclamation.directive';


@NgModule({
  declarations: [ReclamationListBackOfficeComponent,HoverEffectReclamationDirective],
  imports: [
    CommonModule,
    ReclamationBackOfficeRoutingModule,
    FormsModule
  ]
})
export class ReclamationBackOfficeModule { }
