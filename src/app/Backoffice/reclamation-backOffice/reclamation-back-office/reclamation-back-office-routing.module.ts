import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationListBackOfficeComponent } from '../component/reclamation-list-back-office/reclamation-list-back-office.component';

const routes: Routes = [
  { path: 'reclamationList', component: ReclamationListBackOfficeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationBackOfficeRoutingModule { }
