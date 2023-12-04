import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css'],
})
export class EtudiantAddComponent {
  constructor(
    private etudiantService: EtudiantService,
    private router: Router
  ) {}
  newEtudiant: Etudiant = {
    idEtudiant: 0,
    nomEt: '',
    prenomEt: '',
    cin: 0,
    dateNaissance: new Date(),
    ecole: '',
    email: '',
    password: '',
    picture: '',
    reservations: [],
  };

  etudiants: Etudiant = new Etudiant();
  showErrorMessage: boolean = false;
  loginEtudiant(): void {
    if (this.newEtudiant.email !== '')
      this.etudiantService.login(this.newEtudiant).subscribe((data) => {
        this.etudiants = data;
        if (
          this.newEtudiant.email === 'admin@admin.com' &&
          this.newEtudiant.password === 'admin'
        ) {
          this.router.navigateByUrl('backoffice');
        } else if (this.etudiants != null) {
          localStorage.setItem('etudiant', JSON.stringify(this.etudiants));
          const etudiantString = localStorage.getItem('etudiant');
          console.log(etudiantString);
          this.router.navigateByUrl('');
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 100);
        } else {
          this.showErrorMessage = true;
        }
      });
  }
}
