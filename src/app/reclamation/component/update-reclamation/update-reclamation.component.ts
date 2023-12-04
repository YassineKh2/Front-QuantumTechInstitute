import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { Reclamation } from 'src/app/models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent {
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
  reclamations: Reclamation = new Reclamation;
  formSubmitted: boolean = false;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const reclamationId = params['id'];
      this.reclamationService
          .getreclamationByID(reclamationId)
          .subscribe((data) => {
            console.log(data);
            this.reclamations = data;
            this.newReclamation = {
              idReclamation: this.reclamations.idReclamation,
              titre: this.reclamations.titre,
              message: this.reclamations.message,
              email: this.reclamations.email,
              dateCreation: new Date,
              etudiant: undefined,
            };
          });
          
    });
  }
  updateReclamation(): void {
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
