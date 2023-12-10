import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { ChambreListComponent } from './component/chambre-list/chambre-list.component';
import { ChambreAddComponent } from './component/chambre-add/chambre-add.component';
import { FormsModule } from '@angular/forms';
import {FrontofficeModule} from "../frontoffice/frontoffice.module";
import {ChambreModifyComponent} from "./component/chambre-modify/chambre-modify.component";


@NgModule({
  declarations: [ChambreListComponent, ChambreAddComponent,ChambreModifyComponent],
  imports: [
    CommonModule,
      ChambreRoutingModule,
    FormsModule,
    FrontofficeModule
  ]
})
export class ChambreModule { }
