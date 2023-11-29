import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-add-signup',
  templateUrl: './etudiant-add-signup.component.html',
  styleUrls: ['./etudiant-add-signup.component.css'],
})
export class EtudiantAddSignupComponent {
  newEtudiant: Etudiant = {
    idEtudiant: 0,
    nomEt: '',
    prenomEt: '',
    cin: 0,
    dateNaissance: new Date(),
    ecole: '',
    email: '',
    password: '',
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
            password: '',
            reservations: [],
          };
          this.router.navigateByUrl('mainetudiants/etudiantLogin');
        },
        (error) => {
          console.error('Error adding Etudiant', error);
        }
      );
  }
  loadEtudiants(): void {}
}
