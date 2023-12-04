import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantBackOfficeRoutingModule } from './etudiant-back-office-routing.module';
import { EtudiantListBackOfficeComponent } from '../component/etudiant-list-back-office/etudiant-list-back-office.component';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';


@NgModule({
  declarations: [EtudiantListBackOfficeComponent,HoverDirective],
  imports: [
    CommonModule,
    EtudiantBackOfficeRoutingModule,
    FormsModule
  ]
})
export class EtudiantBackOfficeModule { }
