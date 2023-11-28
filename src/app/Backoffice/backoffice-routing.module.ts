import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BackofficeComponent} from "./backoffice.component";
import {BodyBackofficeComponent} from "./body-backoffice/body-backoffice.component";
import {FrontofficeComponent} from "../frontoffice/frontoffice.component";
import {BodyComponent} from "../body/body.component";

const routes: Routes = [

  {path:'', component:BackofficeComponent, children:[
      {path:'', component:BodyBackofficeComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
