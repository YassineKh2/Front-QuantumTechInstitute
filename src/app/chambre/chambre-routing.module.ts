import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChambreListComponent } from './component/chambre-list/chambre-list.component';
import { ChambreAddComponent } from './component/chambre-add/chambre-add.component';
import {ChambreModifyComponent} from "./component/chambre-modify/chambre-modify.component";

const routes: Routes = [
    { path: '', component: ChambreListComponent },
    { path: 'add', component: ChambreAddComponent },
    {path:'modify/:id',component:ChambreModifyComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChambreRoutingModule {}
