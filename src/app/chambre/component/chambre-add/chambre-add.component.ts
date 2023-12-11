import {Component, OnInit} from '@angular/core';
import {ChambreService} from "../../../services/chambre.service";
import {Chambre, TypeChambre} from "../../../models/Chambre";
import {Router} from "@angular/router";
import {Bloc} from "../../../models/Bloc";
import {NgForm} from "@angular/forms";
import {Foyer} from "../../../models/Foyer";
import {BlocService} from "../../../services/bloc.service";

@Component({
  selector: 'app-chambre-add',
  templateUrl: './chambre-add.component.html',
  styleUrls: ['./chambre-add.component.css']
})
export class ChambreAddComponent implements OnInit{

  NewChambre: Chambre =  {
    idChambre: 0,
    bloc: new Bloc(),
    numeroChambre: 0,
    reservations: [],
    typeC: TypeChambre.SIMPLE,
  }
  idBloc: number = 0
  Blocs: Bloc[] = []
  ngOnInit() {
    this.blocService.findAll().subscribe(data => {
      this.Blocs = data;
    });
  }
  constructor(private chambreService: ChambreService, private router: Router, private blocService:BlocService) {
  }

  addChambre()
  {console.log("hey")
    // @ts-ignore
    this.NewChambre.bloc = this.Blocs.at(this.idBloc);
    this.chambreService.addChambre(this.NewChambre).subscribe(
        () => {
          this.router.navigateByUrl('/backoffice/chambre');
        },
        () => {
          console.log('failed')
        }
    );
  }

  protected readonly TypeChambre = TypeChambre;
  protected readonly undefined = undefined;
}
