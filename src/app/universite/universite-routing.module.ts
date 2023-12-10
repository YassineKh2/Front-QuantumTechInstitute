import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UniversiteListComponent} from "./component/universite-list/universite-list.component";
import {UniversiteAddComponent} from "./component/universite-add/universite-add.component";
import {UniversiteModifyComponent} from "./component/universite-modify/universite-modify.component";

const routes: Routes = [
  {path:'', component:UniversiteListComponent},
  {path:'add', component:UniversiteAddComponent},
  {path:'modify/:id', component:UniversiteModifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversiteRoutingModule {}
