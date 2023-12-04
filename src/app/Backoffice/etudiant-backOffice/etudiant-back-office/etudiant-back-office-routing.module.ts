import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListBackOfficeComponent } from '../component/etudiant-list-back-office/etudiant-list-back-office.component';

const routes: Routes = [
  { path: 'etudiantList', component: EtudiantListBackOfficeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantBackOfficeRoutingModule { }
