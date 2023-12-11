import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClubListComponent} from "./component/club-list/club-list.component";
import { ClubAddComponent } from './component/club-add/club-add.component';
import { ClubModifyComponent } from './component/club-modify/club-modify.component';


const routes: Routes = [
  {path:'', component:ClubListComponent},
  {path:'add', component:ClubAddComponent},
  {path:'modify/:id', component:ClubModifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class clubRoutingModule {}
