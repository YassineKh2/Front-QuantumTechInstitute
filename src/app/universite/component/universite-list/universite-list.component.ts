import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../services/universite.service";
import {Universite} from "../../../models/Universite";
import {Router} from "@angular/router";

@Component({
  selector: 'app-foyer-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  constructor(private universiteService: UniversiteService,private router: Router) {
  }

  universites: Universite[] = [];

  ngOnInit() {
    this.universiteService.getAllUniversites().subscribe(data => {
      this.universites = data;
    });
  }

  deleteUni(indexUni: number) {
    let uni = this.universites.at(indexUni);
    // @ts-ignore
    this.universiteService.deleteUniversite(uni).subscribe(
      () => {
        this.universites.slice(indexUni,1)
      }
    );
  }
}
