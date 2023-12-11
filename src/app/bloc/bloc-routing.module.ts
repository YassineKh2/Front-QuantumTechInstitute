import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocListComponent } from './component/bloc-list/bloc-list.component';
import { BlocAddComponent } from './component/bloc-add/bloc-add.component';
import {BlocModifyComponent} from "./component/bloc-modify/bloc-modify.component";

const routes: Routes = [
  { path: '', component: BlocListComponent },
  { path: 'add', component: BlocAddComponent },
  { path: 'modify/:id', component: BlocModifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlocRoutingModule {}
