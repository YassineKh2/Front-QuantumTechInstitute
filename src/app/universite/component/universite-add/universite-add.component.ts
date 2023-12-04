import {Component, OnInit} from '@angular/core';
import {Universite} from "../../../models/Universite";
import {UniversiteService} from "../../../services/universite.service";
import {FoyerService} from "../../../services/foyer.service";
import {Foyer} from "../../../models/Foyer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foyer-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.css']
})
export class UniversiteAddComponent implements OnInit {

  NewUni: Universite = {
    idUniversite: 0,
    nomUniversite: '',
    adresse: '',
    imageUni:'',
    foyer: undefined,
  }
  idFoyer: number|undefined = undefined
  Foyers: Foyer[] = []
  constructor(private universiteService: UniversiteService, private foyerService: FoyerService,private router: Router) {
  }

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
  addUni() {
    console.log(this.NewUni)
    if (this.idFoyer === undefined) {
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
