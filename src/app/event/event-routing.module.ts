import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventListComponent} from "./component/event-list/event-list.component";
import {EventAddComponent} from "./component/event-add/event-add.component";
import {EventModifyComponent} from "./component/event-modify/event-modify.component";

const routes: Routes = [
  {path:'', component:EventListComponent},
  {path:'add', component:EventAddComponent},
  {path:'modify/:id', component:EventModifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
