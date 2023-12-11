import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event'; // Import Event model
import { EventService } from 'src/app/services/event.service'; // Import EventService

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
        console.log(this.events);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  deleteEvent(indexEvent: number): void {
    let event = this.events.at(indexEvent);
    // @ts-ignore
    this.eventService.deleteEvent(event?.idEvent).subscribe(
      () => {
        this.events.splice(indexEvent, 1);
      },
      (error) => {
        console.error('Error deleting event:', error);
      }
    );
  }
}
