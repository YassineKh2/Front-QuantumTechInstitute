import { Component } from '@angular/core';
import { BlocService } from '../../../services/bloc.service';
import {Bloc} from "../../../models/Bloc";
import {Router} from "@angular/router";



@Component({
  selector: 'app-bloc-add',
  templateUrl: './bloc-add.component.html',
  styleUrls: ['./bloc-add.component.css']
})
export class BlocAddComponent{

  NewBloc: Bloc =  {
    idBloc: 0,
    nomBloc: '',
    capaciteBloc: 0,
    chambres:undefined,
    foyer:undefined
  }


  constructor(private blocService: BlocService, private router: Router) {
  }

  addBloc() {
    this.blocService.addBloc(this.NewBloc).subscribe(
        () => {
          this.router.navigateByUrl('/backoffice/bloc');
        },
        () => {
          console.log('failed')
        }
    );
  }

}
