import {Component} from '@angular/core';
import {ChambreService} from "../../../services/chambre.service";
import {Chambre, TypeChambre} from "../../../models/Chambre";
import {Router} from "@angular/router";
import {BlocModule} from "../../../bloc/bloc.module";
import {Bloc} from "../../../models/Bloc";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.css']
})
export class ChambreAddComponent {

  NewChambre: Chambre =  {
    idChambre: 0,
    bloc: new Bloc(),
    numeroChambre: 0,
    reservations: [],
    typeC: TypeChambre.SIMPLE,
  }
  constructor(private chambreService: ChambreService, private router: Router) {
  }

  addChambre() {
    this.chambreService.addChambre(this.NewChambre).subscribe(
        () => {
          this.router.navigateByUrl('/backoffice/chambre');
        },
        () => {
          console.log('failed')
        }
    );
  }
}
