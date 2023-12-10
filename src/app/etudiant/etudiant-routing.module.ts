import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './component/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './component/etudiant-add/etudiant-add.component';
import { EtudiantAddSignupComponent } from './component/etudiant-add-signup/etudiant-add-signup.component';

const routes: Routes = [
  { path: 'etudiantList', component: EtudiantListComponent },
  { path: 'etudiantLogin', component: EtudiantAddComponent },
  { path: 'etudiantRegister', component: EtudiantAddSignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule {}
