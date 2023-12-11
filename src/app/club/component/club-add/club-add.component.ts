
import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/Club';
import { ClubService } from 'src/app/services/club.service';
import { Universite } from 'src/app/models/Universite';
import { UniversiteService } from 'src/app/services/universite.service';
import { Event } from 'src/app/models/Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club-add',
  templateUrl: './club-add.component.html',
  styleUrls: ['./club-add.component.css']
})
export class ClubAddComponent implements OnInit {

  newClub: Club = new Club();
  universites: Universite[] = [];
  indexUniversite:number=0;

  constructor(
    private clubService: ClubService,
    private universiteService: UniversiteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.universiteService.getAllUniversites().subscribe(data => {
      this.universites = data;
    });
  }

  addClub() {
    this.newClub.universite = this.universites.at(this.indexUniversite);

    this.clubService.AddClub(this.newClub).subscribe(
      () => {
     
        this.router.navigateByUrl('/backoffice/clubs');
      },
      () => {
        console.log('Failed to add club');
      }
    );
  }
  
}


