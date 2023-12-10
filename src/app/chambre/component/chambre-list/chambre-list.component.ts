import {Component, OnInit} from '@angular/core';
import {ChambreService} from "../../../services/chambre.service";
import {Router} from "@angular/router";
import {Chambre} from "../../../models/Chambre";

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent implements OnInit{

  constructor(private chambreService: ChambreService,private router: Router) {
  }
  Chambre: Chambre[] = [];

  ngOnInit(){
    this.chambreService.findAll().subscribe();
  }

  delete(idChambre:number){
    let uni: Chambre| undefined = this.Chambre.at(idChambre);
    this.chambreService.delete(idChambre).subscribe(()=>{
      this.Chambre.slice(idChambre,1)
    });
  }


}
