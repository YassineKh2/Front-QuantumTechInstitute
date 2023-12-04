import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import {RouterOutlet} from "@angular/router";
import { NavbarBackofficeComponent } from './navbar-backoffice/navbar-backoffice.component';
import { BodyBackofficeComponent } from './body-backoffice/body-backoffice.component';
import { HeaderBackofficeComponent } from './header-backoffice/header-backoffice.component';
import {BackofficeRoutingModule} from "./backoffice-routing.module";
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './etudiant-backOffice/hover.directive';
import { ReclamationListBackOfficeComponent } from './reclamation-backOffice/component/reclamation-list-back-office/reclamation-list-back-office.component';
import { HoverEffectReclamationDirective } from './reclamation-backOffice/hover-effect-reclamation.directive';



@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarBackofficeComponent,
    BodyBackofficeComponent,
    HeaderBackofficeComponent,
    
  ],
  exports: [
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
