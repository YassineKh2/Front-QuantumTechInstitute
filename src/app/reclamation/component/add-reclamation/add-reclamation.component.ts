import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { Reclamation } from 'src/app/models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {
  @ViewChild('form', { static: true }) form!: NgForm;
  newReclamation: Reclamation = {
    idReclamation: 0,
    titre: '',
    message: '',
    email: '',
    dateCreation: new Date,
    etudiant: undefined,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reclamationService: ReclamationService
  ) {}
  formSubmitted: boolean = false;
  ajouterReclamation(): void {
    this.formSubmitted = true;
    const storedData = localStorage.getItem('etudiant');
    if (storedData) {
      const etudiant: Etudiant = JSON.parse(storedData);
      if (etudiant) {
        this.newReclamation.etudiant = etudiant;

    if (this.form.valid && this.newReclamation.titre !== '')
      this.reclamationService.AddReclamation(this.newReclamation).subscribe(
        (addedReclamation: Reclamation) => {
          console.log('Reclamation added successfully', addedReclamation);
          this.loadReclamations();
          this.newReclamation = {
            idReclamation: 0,
            titre: '',
            message: '',
            email: '',
            dateCreation: new Date,
            etudiant: undefined,
          };
          this.router.navigateByUrl('mainreclamations/reclamationList');
        },
        (error) => {
          console.error('Error adding Etudiant', error);
        }
      );
      }
    }
  }
  loadReclamations(): void {}

}
