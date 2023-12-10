import {Component, OnInit} from '@angular/core';
import {Foyer} from "../../models/Foyer";
import {FoyerService} from "../../services/foyer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-foyer-modify',
  templateUrl: './foyer-modify.component.html',
  styleUrls: ['./foyer-modify.component.css']
})
export class FoyerModifyComponent implements OnInit {
  NewFoyer: Foyer = {
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0,
    universite: undefined,
    blocs: undefined
  }


  constructor(private activatedroute: ActivatedRoute, private foyerService: FoyerService, private router: Router) {
  }

  ngOnInit() {
    this.activatedroute.params.subscribe((params) => {
      let id: number | null = Number(params['id'])
     this.foyerService.getFoyerById(id).subscribe((foy:Foyer)=>{
       this.NewFoyer = foy;
     })
    })



  }

  modfierFoyer() {
    this.foyerService.modifyFoyer(this.NewFoyer).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/foyer');
      },
      () => {
        console.log('failed')
      }
    );
  }
}
