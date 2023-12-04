import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-list-back-office',
  templateUrl: './etudiant-list-back-office.component.html',
  styleUrls: ['./etudiant-list-back-office.component.css']
})
export class EtudiantListBackOfficeComponent {
  constructor(private etudiantService:EtudiantService) { }
  searchKeyword: string = '';
  searchResults$: Observable<Etudiant[]> | undefined;
  etudiants: Etudiant[] = [];
  searchEtudiantsByNomEt(): void {
    if (this.searchKeyword.trim() !== '') {
      this.searchResults$ = this.etudiantService.searchEtudiantsByNomEt(this.searchKeyword);
    } else {
      // Handle empty search term (optional)
      this.searchResults$ = undefined;
      this.etudiantService.getAllEtudiants().subscribe(data => {
        this.etudiants = data;
      });
    }
  }
  ngOnInit() {
    this.etudiantService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }
}
