import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { BodyComponent } from '../body/body.component';

const routes: Routes = [
  {
    path: '',
    component: FrontofficeComponent,
    children: [
      { path: '', component: BodyComponent },
      {
        path: 'mainetudiants',
        loadChildren: () =>
          import('../etudiant/etudiant.module').then((m) => m.EtudiantModule),
      },
      {
        path: 'mainreclamations',
        loadChildren: () =>
          import('../reclamation/reclamation/reclamation.module').then((m) => m.ReclamationModule),
      },
    ],
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('../Backoffice/backoffice.module').then((m) => m.BackofficeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontofficeRoutingModule {}
