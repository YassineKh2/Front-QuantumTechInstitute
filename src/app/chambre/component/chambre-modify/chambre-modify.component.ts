import {Component, OnInit} from '@angular/core';
import {Chambre, TypeChambre} from "../../../models/Chambre";
import {Bloc} from "../../../models/Bloc";
import {ActivatedRoute, Router} from "@angular/router";
import {ChambreService} from "../../../services/chambre.service";
import {BlocService} from "../../../services/bloc.service";

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

  constructor(private activatedroute: ActivatedRoute,private chambreService: ChambreService,private router: Router,private blocService: BlocService) {

  }
  Blocs: Bloc[] = []
  ngOnInit(){
    this.blocService.findAll().subscribe(data => {
      this.Blocs = data;
    });
    this.activatedroute.params.subscribe(params => {
      let idChambre: number | null = Number(params['id']);
      this.chambreService.findById(idChambre).subscribe((ch: Chambre) => {
        this.NewChambre = ch;
        console.log(this.NewChambre)
      });
    });
  }

  modfierChambre() {
    this.chambreService.updateChambre(this.NewChambre).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/chambre');
      },
      () => {
        console.log('failed')
      }
    );
  }


  protected readonly TypeChambre = TypeChambre;
}
