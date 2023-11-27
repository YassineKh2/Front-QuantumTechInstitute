import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent, // Add your home page component here
    pathMatch: 'full', // This ensures that the route matches the whole URL
  },
  {
    path: 'mainetudiants',
    loadChildren: () =>
      import('./etudiant/etudiant.module').then((m) => m.EtudiantModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
