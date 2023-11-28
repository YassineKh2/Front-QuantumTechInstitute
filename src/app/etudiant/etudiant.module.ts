import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantListComponent } from './component/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './component/etudiant-add/etudiant-add.component';
import { FormsModule } from '@angular/forms';
import { EtudiantAddSignupComponent } from './component/etudiant-add-signup/etudiant-add-signup.component';
import {FrontofficeModule} from "../frontoffice/frontoffice.module";


@NgModule({
  declarations: [EtudiantListComponent, EtudiantAddComponent, EtudiantAddSignupComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    FrontofficeModule
  ]
})
export class EtudiantModule { }
