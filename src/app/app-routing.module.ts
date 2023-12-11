import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import {FrontofficeComponent} from "./frontoffice/frontoffice.component";
import {FrontofficeModule} from "./frontoffice/frontoffice.module";


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./frontoffice/frontoffice.module').then((m) => m.FrontofficeModule),
  },
  {
    path: 'universites',
    loadChildren: () =>
      import('./universite/universite.module').then((m) => m.UniversiteModule),
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./Backoffice/backoffice.module').then((m) => m.BackofficeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
