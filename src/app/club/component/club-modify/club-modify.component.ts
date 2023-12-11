import { Component, OnInit } from '@angular/core';
import { Club } from '../../../models/Club';
import { Universite } from '../../../models/Universite'; // Import University model
import { ClubService } from '../../../services/club.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-club-modify',
  templateUrl: './club-modify.component.html',
  styleUrls: ['./club-modify.component.css'],
})
export class ClubModifyComponent implements OnInit {
  newClub: Club = {
    idClub: 0,
    nomClub: '',
    type: '',
    descriptionClub: '',
    image: '',
    contact: '',
    status: '',
    dateCreation: new Date(),
    universite: undefined,
    events: [],
  };
  idUniversity: number | undefined = undefined; // Assuming it's used for university id selection
  universities: Universite[] = []; // Assuming you have a University model and service
  universites: Universite[] = [];
  indexUniversite: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clubService: ClubService,
    private universiteService: UniversiteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.universiteService.getAllUniversites().subscribe((data) => {
      this.universites = data;
    });
    this.activatedRoute.params.subscribe((params) => {
      let id: number | null = Number(params['id']);
      console.log(id);
      this.clubService.getClubById(id).subscribe(
        (club: Club) => {
          this.newClub = club;
        },
        (error) => {
          console.error('Error fetching Club:', error);
        }
      );
    });
  }

  modifyClub() {
    this.newClub.universite = this.universites.at(this.indexUniversite);
    this.clubService.modifyClub(this.newClub).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/clubs');
      },
      () => {
        console.log('Failed to modify club');
      }
    );
  }
}
