import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './component/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './component/etudiant-add/etudiant-add.component';
import { EtudiantAddSignupComponent } from './component/etudiant-add-signup/etudiant-add-signup.component';
import { EtudiantProfileComponent } from './component/etudiant-profile/etudiant-profile.component';
import { EtudiantUpdateProfileComponent } from './component/etudiant-update-profile/etudiant-update-profile.component';

const routes: Routes = [
  { path: 'etudiantList', component: EtudiantListComponent },
  { path: 'etudiantLogin', component: EtudiantAddComponent },
  { path: 'etudiantRegister', component: EtudiantAddSignupComponent },
  { path: 'etudiantProfile', component: EtudiantProfileComponent },
  { path: 'etudiantUpdateProfile', component: EtudiantUpdateProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantRoutingModule {}
