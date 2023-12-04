import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReclamationComponent } from '../component/add-reclamation/add-reclamation.component';
import { ListReclamationComponent } from '../component/list-reclamation/list-reclamation.component';
import { UpdateReclamationComponent } from '../component/update-reclamation/update-reclamation.component';

const routes: Routes = [
  { path: 'reclamationAdd', component: AddReclamationComponent },
  { path: 'reclamationList', component: ListReclamationComponent },
  {
    path: 'updatereclamation/:id',
    component: UpdateReclamationComponent, // Replace with your actual component
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
