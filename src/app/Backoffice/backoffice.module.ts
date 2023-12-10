import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import {RouterOutlet} from "@angular/router";
import { NavbarBackofficeComponent } from './navbar-backoffice/navbar-backoffice.component';
import { BodyBackofficeComponent } from './body-backoffice/body-backoffice.component';
import { HeaderBackofficeComponent } from './header-backoffice/header-backoffice.component';
import {BackofficeRoutingModule} from "./backoffice-routing.module";



@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarBackofficeComponent,
    BodyBackofficeComponent,
    HeaderBackofficeComponent
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
