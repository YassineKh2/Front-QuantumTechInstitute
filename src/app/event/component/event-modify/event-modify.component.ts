import { Component, OnInit } from '@angular/core';
import { Event } from "../../../models/Event";
import { Club } from "../../../models/Club"; // Import Club model
import { EventService } from "../../../services/event.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-event-modify',
  templateUrl: './event-modify.component.html',
  styleUrls: ['./event-modify.component.css']
})
export class EventModifyComponent implements OnInit {
  newEvent: Event = {
    idEvent: 0,
    nomEvent: '',
    descriptionEvent: '',
    image: '',
    organisateur: '',
    location: '',
    dateCreation: new Date(),
    club: undefined
  };
  clubs: Club[] = []; // Assuming you have a Club model and service

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let id: number | null = Number(params['id']);
      console.log(id);
      this.eventService.getEventById(id).subscribe((event: Event) => {
        this.newEvent = event;
      }, (error) => {
        console.error('Error fetching Event:', error);
      });
    });
  }
  
  modifyEvent() {
    this.eventService.modifyEvent(this.newEvent).subscribe(
      () => {
        this.router.navigateByUrl('/backoffice/events');
      },
      () => {
        console.log('Failed to modify event');
      }
    );
  }
}
