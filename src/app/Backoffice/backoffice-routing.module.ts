import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackofficeComponent} from "./backoffice.component";
import {BodyBackofficeComponent} from "./body-backoffice/body-backoffice.component";
import {FrontofficeComponent} from "../frontoffice/frontoffice.component";
import {BodyComponent} from "../body/body.component";
import {BlocModule} from "../bloc/bloc.module";

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
          {path: 'bloc',
        loadChildren: () =>
          import('../bloc/bloc.module').then((m) => m.BlocModule),
      },
      {
        path: 'chambre',
        loadChildren: () =>
          import('../chambre/chambre.module').then((m) => m.ChambreModule),
      }

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
