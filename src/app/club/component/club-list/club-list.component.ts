import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/models/Club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css'],
})
export class ClubListComponent {
  clubs: Club[] = [];

  constructor(private clubService: ClubService, private router: Router) {}

  ngOnInit(): void {
    this.loadClubs();
  }

  loadClubs(): void {
    this.clubService.getAllClubs().subscribe(
      (data: Club[]) => {
        this.clubs = data;
      },
      (error) => {
        console.error('Error fetching clubs:', error);
      }
    );
  }
  deleClub(indexClub: number) {
    let club = this.clubs.at(indexClub);
    // @ts-ignore
    this.clubService.deleteClub(club?.idClub).subscribe(
      () => {
        this.clubs.splice(indexClub, 1);
      },
      () => {
        console.log('error');
      }
    );
  }
}
