// bloc-modify.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from '../../../services/bloc.service';

@Component({
  selector: 'app-bloc-modify',
  templateUrl: './bloc-modify.component.html',
  styleUrls: ['./bloc-modify.component.css']
})
export class BlocModifyComponent implements OnInit {
  bloc: { idBloc: number; capaciteBloc: number; nomBloc: string } = {
    idBloc: 0,
    nomBloc: '',
    capaciteBloc: 0
  }

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private blocService: BlocService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.bloc.idBloc = params['id'];
      this.loadBloc();
    });
  }

  loadBloc() {
    this.blocService.findById(this.bloc.idBloc).subscribe(
        (data) => {
          this.bloc = data;
        },
        (error) => {
          console.error('Error loading Bloc', error);
        }
    );
  }

  updateBloc() {
    this.blocService.updateBloc(this.bloc.idBloc, this.bloc).subscribe(
        (response) => {
          console.log('Bloc updated successfully', response);
          // Navigate to the Bloc list or any other page after successful update
          this.router.navigate(['/bloc-list']);
        },
        (error) => {
          console.error('Error updating Bloc', error);
        }
    );
  }
}
