import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { AddReclamationComponent } from '../component/add-reclamation/add-reclamation.component';
import { FormsModule } from '@angular/forms';
import { ListReclamationComponent } from '../component/list-reclamation/list-reclamation.component';
import { UpdateReclamationComponent } from '../component/update-reclamation/update-reclamation.component';


@NgModule({
  declarations: [AddReclamationComponent,ListReclamationComponent,UpdateReclamationComponent],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    FormsModule
  ]
})
export class ReclamationModule { }
