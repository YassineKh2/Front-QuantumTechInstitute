import { HttpResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-add-signup',
  templateUrl: './etudiant-add-signup.component.html',
  styleUrls: ['./etudiant-add-signup.component.css'],
})
export class EtudiantAddSignupComponent {
  @ViewChild('form', { static: true }) form!: NgForm;
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService
  ) {}
  formSubmitted: boolean = false;
  emailExist: boolean = false;
  getTodayDate(): string {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${today.getFullYear()}-${month}-${day}`;
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    // Assign the filename to newEtudiant.picture
    this.newEtudiant.picture = file.name;
    this.uploadFile(file);
  }
  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);
  
    this.etudiantService.uploadFile(formData).subscribe(
      (response: string) => {
        console.log('File uploaded successfully:', response);
        // Handle any additional logic after successful upload
      },
      (error) => {
        console.error('Error uploading file', error);
        // Handle error cases, if needed
      }
    );
  }
  
  isFirstCharUppercase(password: string): boolean {
    if (password.length === 0) {
      return true; // No restriction if the password is empty
    }
    return password[0] === password[0].toUpperCase();
  }
  ajouterEtudiant(): void {
    this.formSubmitted = true;
  
    // Verify if the email already exists
    this.etudiantService.verifyEmail(this.newEtudiant.email).subscribe(
      (existingEtudiant: Etudiant[] | null) => {
        if (!existingEtudiant) {
          // Email is unique, proceed to add the student
          if (this.form.valid && this.newEtudiant.nomEt !== '') {
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
                  picture: '',
                  reservations: [],
                };
                this.router.navigateByUrl('mainetudiants/etudiantLogin');
              },
              (error) => {
                console.error('Error adding Etudiant', error);
              }
            );
          }
        } else {
          // Email is not unique, show an error or take appropriate action
          this.emailExist = true;
          console.error('Email already exists');
        }
      },
      (error) => {
        console.error('Error verifying email', error);
        // Handle error cases, if needed
      }
    );
  }
  loadEtudiants(): void {}
}
