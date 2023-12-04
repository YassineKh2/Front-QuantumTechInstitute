import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantListComponent } from './component/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './component/etudiant-add/etudiant-add.component';
import { FormsModule } from '@angular/forms';
import { EtudiantAddSignupComponent } from './component/etudiant-add-signup/etudiant-add-signup.component';
import {FrontofficeModule} from "../frontoffice/frontoffice.module";
import { EtudiantProfileComponent } from './component/etudiant-profile/etudiant-profile.component';
import { EtudiantUpdateProfileComponent } from './component/etudiant-update-profile/etudiant-update-profile.component';


@NgModule({
  declarations: [EtudiantListComponent, EtudiantAddComponent, EtudiantAddSignupComponent, EtudiantProfileComponent, EtudiantUpdateProfileComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    FrontofficeModule
  ]
})
export class EtudiantModule { }
