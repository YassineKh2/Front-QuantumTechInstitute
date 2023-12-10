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
    foyer: undefined,
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
}
