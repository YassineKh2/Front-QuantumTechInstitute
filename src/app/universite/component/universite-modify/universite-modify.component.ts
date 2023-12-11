import {Component, OnInit} from '@angular/core';
import {Universite} from "../../../models/Universite";
import {Foyer} from "../../../models/Foyer";
import {UniversiteService} from "../../../services/universite.service";
import {FoyerService} from "../../../services/foyer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-foyer-modify',
  templateUrl: './universite-modify.component.html',
  styleUrls: ['./universite-modify.component.css']
})
export class UniversiteModifyComponent implements OnInit {
  NewUni: Universite = {
    idUniversite: 0,
    nomUniversite: '',
    adresse: '',
    imageUni:'',
    foyer: undefined,
    clubs:[]
  }
  idFoyer: number | undefined = undefined
  Foyers: Foyer[] = []

  constructor(private activatedroute: ActivatedRoute, private universiteService: UniversiteService, private foyerService: FoyerService, private router: Router) {
  }

  ngOnInit() {
    this.activatedroute.params.subscribe((params) => {
      let id: number | null = Number(params['id'])
      console.log(id)
      this.universiteService.getUniversiteById(id)
        .subscribe((universite: Universite) => {
          this.NewUni = universite;
          if (universite.foyer instanceof Foyer) {
            this.idFoyer = this.Foyers.indexOf(universite.foyer)
          }
        }, (error) => {
          console.error('Error fetching Universite:', error);
        });
    })


    this.foyerService.getAllFoyers().subscribe(data => {
      this.Foyers = data;
    });
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.NewUni.imageUni = file.name;
    this.uploadFile(file);
  }
  modifyUni() {
    if (this.idFoyer === undefined) {
      this.universiteService.modifyUniversite(this.NewUni).subscribe();
      return
    }

    this.NewUni.foyer = this.Foyers.at(this.idFoyer);
    this.universiteService.modifyUniversite(this.NewUni).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/universite');
      },
      () => {
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
