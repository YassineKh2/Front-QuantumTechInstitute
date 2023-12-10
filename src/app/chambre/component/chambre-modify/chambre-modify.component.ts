import {Component, OnInit} from '@angular/core';
import {Chambre, TypeChambre} from "../../../models/Chambre";
import {Bloc} from "../../../models/Bloc";
import {ActivatedRoute, Router} from "@angular/router";
import {ChambreService} from "../../../services/chambre.service";

@Component({
  selector: 'app-chambre-modify',
  templateUrl: './chambre-modify.component.html',
  styleUrls: ['./chambre-modify.component.css']
})
export class ChambreModifyComponent implements OnInit{
  NewChambre: Chambre =  {
    idChambre: 0,
    bloc: new Bloc(),
    numeroChambre: 0,
    reservations: [],
    typeC: TypeChambre.SIMPLE,
  }

  constructor(private activatedroute: ActivatedRoute,private chambreService: ChambreService,private router: Router) {

  }
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      let idChambre: number | null = Number(params['idChambre']);
      this.chambreService.findById(idChambre).subscribe((ch: Chambre) => {
        this.NewChambre = ch;
      });
    });
  }


}
