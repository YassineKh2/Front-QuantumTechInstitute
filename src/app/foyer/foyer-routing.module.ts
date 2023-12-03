import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoyerListComponent} from "./foyer-list/foyer-list.component";
import {FoyerAddComponent} from "./foyer-add/foyer-add.component";
import {FoyerModifyComponent} from "./foyer-modify/foyer-modify.component";

const routes: Routes = [
  {path:'',component:FoyerListComponent},
  {path:'add',component:FoyerAddComponent},
  {path:'modify/:id',component:FoyerModifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoyerRoutingModule {}
