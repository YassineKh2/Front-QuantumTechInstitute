import {Component, OnInit} from '@angular/core';
import {ChambreService} from "../../../services/chambre.service";
import {Router} from "@angular/router";
import {Chambre} from "../../../models/Chambre";
import {Foyer} from "../../../models/Foyer";

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent implements OnInit{

  constructor(private chambreService: ChambreService,private router: Router) {
  }
  Chambres: Chambre[] = [];

  ngOnInit() {
    this.chambreService.findAll().subscribe(data => {
      this.Chambres = data;
      console.log(this.Chambres)
    });
  }



  deleteChambre(idChambre: number) {
    let ch = this.Chambres.at(idChambre);
    // @ts-ignore
    this.chambreService.delete(ch.idChambre).subscribe(
      () => {
        this.Chambres= this.Chambres.filter((chambre)=>{ // @ts-ignore
          return chambre.idChambre !== ch.idChambre })

      }
    );
  }



}
