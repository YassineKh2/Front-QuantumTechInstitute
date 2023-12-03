import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoyerRoutingModule} from "./foyer-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FoyerAddComponent} from "./foyer-add/foyer-add.component";
import {FoyerListComponent} from "./foyer-list/foyer-list.component";
import {FoyerModifyComponent} from "./foyer-modify/foyer-modify.component";




@NgModule({
  declarations: [FoyerAddComponent,FoyerListComponent,FoyerModifyComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoyerModule { }
