import { Component, OnInit } from '@angular/core';
import { BlocService } from '../../../services/bloc.service';
import {Bloc} from "../../../models/Bloc";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bloc-list',
  templateUrl: './bloc-list.component.html',
  styleUrls: ['./bloc-list.component.css']
})
export class BlocListComponent implements OnInit {
  blocs: Bloc[] = []; // Modify the data type based on your Bloc entity

  constructor(private blocService: BlocService) {}

  ngOnInit() {
    this.loadBlocs();
  }

  loadBlocs() {
    this.blocService.findAll().subscribe(data=>{this.blocs=data;})
  }

  deleteBloc(idBloc: number) {
    //let uni = this.blocs.at(idBloc);
    // @ts-ignore
    this.blocService.delete(idBloc).subscribe(      () => {
      this.blocs.slice(idBloc,1)
      this.blocs = this.blocs.filter(reclamation => reclamation.idBloc !== idBloc);
    });
  }

}
