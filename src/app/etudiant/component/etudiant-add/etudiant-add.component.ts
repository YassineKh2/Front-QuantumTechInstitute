import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css'],
})
export class EtudiantAddComponent {
  newEtudiant: Etudiant = {
    idEtudiant: 0,
    nomEt: '',
    prenomEt: '',
    cin: 0,
    dateNaissance: new Date(),
    ecole: '',
    email: '',
    pwd: '',
    reservations: [],
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService
  ) {}

  ajouterEtudiant(): void {
    if (this.newEtudiant.nomEt !== '')
      this.etudiantService.AddEtudiant(this.newEtudiant).subscribe(
        (addedEtudiant: Etudiant) => {
          console.log('Etudiant added successfully', addedEtudiant);
          this.loadEtudiants();
          this.newEtudiant = {
            idEtudiant: 0,
            nomEt: '',
            prenomEt: '',
            cin: 0,
            dateNaissance: new Date(),
            ecole: '',
            email: '',
            pwd: '',
            reservations: [],
          };
        },
        (error) => {
          console.error('Error adding Etudiant', error);
        }
      );
  }
  loadEtudiants(): void {}
}
