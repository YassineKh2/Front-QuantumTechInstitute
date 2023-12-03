import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteFrontofficeRoutingModule } from './universite-frontoffice-routing.module';
import { UniversiteListFrontofficeComponent } from './component/universite-list-frontoffice/universite-list-frontoffice.component';


@NgModule({
  declarations: [
    UniversiteListFrontofficeComponent
  ],
  imports: [
    CommonModule,
    UniversiteFrontofficeRoutingModule
  ]
})
export class UniversiteFrontofficeModule { }
