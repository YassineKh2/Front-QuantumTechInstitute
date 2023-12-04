import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-update-profile',
  templateUrl: './etudiant-update-profile.component.html',
  styleUrls: ['./etudiant-update-profile.component.css']
})
export class EtudiantUpdateProfileComponent {
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
  etudiants: Etudiant = new Etudiant();
  ngOnInit(): void {
    // Fetch etudiant data from localStorage
    const storedData = localStorage.getItem('etudiant');
    if (storedData) {
      const etudiant: Etudiant = JSON.parse(storedData);

      // Set the form fields with values from the etudiant object
      this.newEtudiant = {
        idEtudiant: etudiant.idEtudiant,
        nomEt: etudiant.nomEt,
        prenomEt: etudiant.prenomEt,
        cin: etudiant.cin,
        dateNaissance: etudiant.dateNaissance,
        ecole: etudiant.ecole,
        email: etudiant.email,
        password: etudiant.password,
        picture: etudiant.picture,
        reservations: etudiant.reservations,
      };
    }
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService
  ) {}
  formSubmitted: boolean = false;
  emailExist: boolean = false;
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    // Assign the filename to newEtudiant.picture
    this.newEtudiant.picture = file.name;
    this.uploadFile(file);
  }
  getTodayDate(): string {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${today.getFullYear()}-${month}-${day}`;
  }
  isFirstCharUppercase(password: string): boolean {
    if (password.length === 0) {
      return true; // No restriction if the password is empty
    }
    return password[0] === password[0].toUpperCase();
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
  updateEtudiant(): void {
    this.formSubmitted = true;
    if (this.form.valid && this.newEtudiant.nomEt !== '')
      this.etudiantService.UpdateEtudiantProfile(this.newEtudiant).subscribe(
        (addedEtudiant: Etudiant) => {
          console.log('Etudiant updated successfully', addedEtudiant);
          this.updateLocalStorage(addedEtudiant);
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
          this.router.navigateByUrl('mainetudiants/etudiantProfile');
        },
        (error) => {
          console.error('Error adding Etudiant', error);
        }
      );
  }
  loadEtudiants(): void {}
  
updateLocalStorage(updatedEtudiant: Etudiant): void {
  const storedData = localStorage.getItem('etudiant');
  if (storedData) {
    const etudiant: Etudiant = JSON.parse(storedData);
    
    // Update the localStorage with the new data
    localStorage.setItem('etudiant', JSON.stringify(updatedEtudiant));
  }
}

}
