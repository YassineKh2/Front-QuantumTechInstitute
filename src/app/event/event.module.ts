import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './component/event-list/event-list.component';
import { EventAddComponent } from './component/event-add/event-add.component';
import {EventRoutingModule} from "./event-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EventModifyComponent } from './component/event-modify/event-modify.component';



@NgModule({
  declarations: [
    EventListComponent,
    EventAddComponent,
    EventModifyComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventModule { }
