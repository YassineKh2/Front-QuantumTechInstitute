import {Component, OnInit} from '@angular/core';
import {FoyerService} from "../../services/foyer.service";
import {Foyer} from "../../models/Foyer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyer-add.component.html',
  styleUrls: ['./foyer-add.component.css']
})
export class FoyerAddComponent{

  NewFoyer: Foyer = {
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0,
    universite: undefined,
    blocs: undefined
  }


  constructor(private foyerService: FoyerService, private router: Router) {
  }

  addFoyer() {
    this.foyerService.AddFoyer(this.NewFoyer).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/foyer');
      },
      () => {
        console.log('failed')
      }
    );
  }

}
