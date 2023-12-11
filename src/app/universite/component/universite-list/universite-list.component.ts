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
      console.log(this.universites)
      this.universites.forEach((uni)=>{
        console.log(uni.imageUni)

      })

    });

  }

  deleteUni(indexUni: number) {
    let uni = this.universites.at(indexUni);
    // @ts-ignore
    this.universiteService.deleteUniversite(uni).subscribe(
      () => {
        this.universites= this.universites.filter((univer)=>{ // @ts-ignore
          return univer.idUniversite !== uni.idUniversite })
      }
    );
  }

}
