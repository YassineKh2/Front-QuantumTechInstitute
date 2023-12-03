import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteListComponent } from './component/universite-list/universite-list.component';
import { UniversiteAddComponent } from './component/universite-add/universite-add.component';
import {UniversiteRoutingModule} from "./universite-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UniversiteModifyComponent } from './component/universite-modify/universite-modify.component';



@NgModule({
  declarations: [
    UniversiteListComponent,
    UniversiteAddComponent,
    UniversiteModifyComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversiteModule { }
