import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { Reclamation } from 'src/app/models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css'],
})
export class ListReclamationComponent {
  constructor(private reclamationService: ReclamationService,private router: Router) {}
  reclamations: Reclamation[] = [];
  updateReclamation(idReclamation: number | undefined) {
    // Assuming you have a route named 'update-reclamation'
    this.router.navigate(['mainreclamations/updatereclamation', idReclamation]);
  }
  redirect() {
    // Assuming you have a route named 'update-reclamation'
    this.router.navigateByUrl('mainreclamations/reclamationAdd');
  }
  ngOnInit() {
    const storedData = localStorage.getItem('etudiant');
    if (storedData) {
      const etudiant: Etudiant = JSON.parse(storedData);
      if (etudiant.idEtudiant !== undefined) {
        console.log(etudiant.idEtudiant);
        this.reclamationService
          .getListReclamation(etudiant.idEtudiant)
          .subscribe((data) => {
            console.log(data);
            this.reclamations = data;
          });
      }
    }
  }
}
