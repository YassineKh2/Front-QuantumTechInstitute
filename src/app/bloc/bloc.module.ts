import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { BlocListComponent } from './component/bloc-list/bloc-list.component';
import { BlocAddComponent } from './component/bloc-add/bloc-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FrontofficeModule} from "../frontoffice/frontoffice.module";
import {BlocModifyComponent} from "./component/bloc-modify/bloc-modify.component";


@NgModule({
  declarations: [BlocListComponent, BlocAddComponent,BlocModifyComponent],
  imports: [
    CommonModule,
    BlocRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlocModule { }
