import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackofficeComponent} from "./backoffice.component";
import {BodyBackofficeComponent} from "./body-backoffice/body-backoffice.component";


const routes: Routes = [

  {path:'', component:BackofficeComponent, children:[
      {path:'', component:BodyBackofficeComponent},
      {
        path: 'etudiantBackoffice',
        loadChildren: () =>
          import('./etudiant-backOffice/etudiant-back-office/etudiant-back-office.module').then((m) => m.EtudiantBackOfficeModule),
      },
      {
        path: 'reclamationBackoffice',
        loadChildren: () =>
          import('./reclamation-backOffice/reclamation-back-office/reclamation-back-office.module').then((m) => m.ReclamationBackOfficeModule),
      {path: 'universite',
        loadChildren: () =>
          import('../universite/universite.module').then((m) => m.UniversiteModule),
      },
      {path: 'foyer',
        loadChildren: () =>
          import('../foyer/foyer.module').then((m) => m.FoyerModule),
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
