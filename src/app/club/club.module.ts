import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubListComponent } from './component/club-list/club-list.component';
import { ClubAddComponent } from './component/club-add/club-add.component';
import {clubRoutingModule} from "./club-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClubModifyComponent } from './component/club-modify/club-modify.component';



@NgModule({
  declarations: [
   ClubListComponent,
    ClubAddComponent,
    ClubModifyComponent
  ],
  imports: [
    CommonModule,
    clubRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClubModule { }
