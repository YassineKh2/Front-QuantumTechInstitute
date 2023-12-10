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

  addUni() {
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

}
