import {Component, OnInit, ViewChild} from '@angular/core';
import {Universite} from "../../../models/Universite";
import {UniversiteService} from "../../../services/universite.service";
import {FoyerService} from "../../../services/foyer.service";
import {Foyer} from "../../../models/Foyer";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foyer-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.css']
})
export class UniversiteAddComponent implements OnInit {
  @ViewChild('universityForm', { static: true }) universityForm!: NgForm;
  NewUni: Universite = {
    idUniversite: 0,
    nomUniversite: '',
    adresse: '',
    imageUni:'',
    foyer: undefined,
    clubs:[]
  }
  idFoyer: number|undefined = undefined
  Foyers: Foyer[] = []
  constructor(private universiteService: UniversiteService, private foyerService: FoyerService,private router: Router) {
  }
  formSubmitted: boolean = false;
  ngOnInit() {
    this.foyerService.getAllFoyers().subscribe(data => {
      this.Foyers = data;
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.NewUni.imageUni = file.name;
    this.uploadFile(file);
  }
  isFirstCharUppercase(password: string|undefined): boolean {
    if(password!=undefined){
    if (password.length === 0) {
      return true; // No restriction if the password is empty
    }
  
    return password[0] === password[0].toUpperCase();
  }
  return false;
  }
  addUni() {
    this.formSubmitted = true;
    console.log(this.NewUni)
    if (this.universityForm.valid && this.isFirstCharUppercase(this.NewUni.nomUniversite)) {
    if (this.idFoyer === undefined ) {
      this.universiteService.AddUniversite(this.NewUni).subscribe();
      return
    }

    this.NewUni.foyer = this.Foyers.at(this.idFoyer);
    this.universiteService.AddUniversite(this.NewUni).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/universite');
      },
      () =>{
        console.log('failed')
      }
    );
  }
}
  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    this.universiteService.uploadImageUni(formData).subscribe(
      (response: string) => {
        console.log('File uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }
}
