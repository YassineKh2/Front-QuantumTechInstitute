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
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
