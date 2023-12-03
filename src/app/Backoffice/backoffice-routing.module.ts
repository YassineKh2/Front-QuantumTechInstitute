import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackofficeComponent} from "./backoffice.component";
import {BodyBackofficeComponent} from "./body-backoffice/body-backoffice.component";
import {FrontofficeComponent} from "../frontoffice/frontoffice.component";
import {BodyComponent} from "../body/body.component";

const routes: Routes = [

  {path:'', component:BackofficeComponent, children:[
      {path:'', component:BodyBackofficeComponent},
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
