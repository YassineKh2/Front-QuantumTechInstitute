import {Component, OnInit} from '@angular/core';
import {FoyerService} from "../../services/foyer.service";
import {Foyer} from "../../models/Foyer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent implements OnInit {
  constructor(private foyerService: FoyerService,private router: Router) {
  }

  Foyers: Foyer[] = [];

  ngOnInit() {
    this.foyerService.getAllFoyers().subscribe(data => {
      this.Foyers = data;
    });
  }

  deleteUni(indexUni: number) {
    let uni = this.Foyers.at(indexUni);
    // @ts-ignore
    this.foyerService.deleteFoyer(uni).subscribe(
      () => {
        this.Foyers.slice(indexUni,1)
      }
    );
  }
}
