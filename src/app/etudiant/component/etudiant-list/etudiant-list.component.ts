import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit{
  constructor(private etudiantService:EtudiantService) { }
  etudiants: Etudiant[] = [];
  ngOnInit() {
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }
  
}
