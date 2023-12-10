import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontofficeComponent} from "./frontoffice.component";
import {BodyComponent} from "../body/body.component";

const routes: Routes = [
  {path:'', component:FrontofficeComponent, children:[
      {path:'', component:BodyComponent},
      {
        path: 'mainetudiants',
        loadChildren: () =>
            import('../etudiant/etudiant.module').then((m) => m.EtudiantModule),
      },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
