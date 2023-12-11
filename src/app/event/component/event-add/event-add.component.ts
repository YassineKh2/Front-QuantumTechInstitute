import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Club } from 'src/app/models/Club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  newEvent: Event = new Event(); 
  clubs: Club[] = [];
  indexClub: number=0;

  constructor(
    private eventService: EventService,
    private clubService: ClubService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadClubs();
  }

  loadClubs(): void {
    this.clubService.getAllClubs().subscribe(
      (data: Club[]) => {
        this.clubs = data;
      },
      (error) => {
        console.error('Error fetching clubs:', error)
      }
    );
  }

  addEvent(): void {
    this.newEvent.club = this.clubs.at(this.indexClub);
    console.log(this.newEvent)
    this.eventService.AddEvent(this.newEvent).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/events');
      },
      () => {
        console.log('Failed to add event');
      }
    );
  }
}
