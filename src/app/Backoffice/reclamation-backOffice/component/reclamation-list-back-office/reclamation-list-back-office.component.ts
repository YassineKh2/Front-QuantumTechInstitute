import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/Etudiant';
import { Reclamation } from 'src/app/models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-list-back-office',
  templateUrl: './reclamation-list-back-office.component.html',
  styleUrls: ['./reclamation-list-back-office.component.css']
})
export class ReclamationListBackOfficeComponent {
  constructor(private reclamationService:ReclamationService,private router: Router) { }

  reclamations: Reclamation[] = [];
  searchKeyword: string = '';
  searchResults$: Observable<Reclamation[]> | undefined;
  reclamation: Reclamation[] = [];
  searchEtudiantsByNomEt(): void {
    if (this.searchKeyword.trim() !== '') {
      this.searchResults$ = this.reclamationService.searchReclamationByTitre(this.searchKeyword);
    } else {
      // Handle empty search term (optional)
      this.searchResults$ = undefined;
      this.reclamationService.getAllReclamations().subscribe(data => {
        this.reclamations = data;
      });
    }
  }
  ngOnInit() {
    this.reclamationService.getAllReclamations().subscribe(data => {
      this.reclamations = data;
    });
  }
 
  deleteReclamation(idReclamation: number | undefined): void {
    this.reclamationService.deleteReclamation(idReclamation).subscribe(data => {
      this.reclamations = this.reclamations.filter(reclamation => reclamation.idReclamation !== idReclamation);
    });
  }
}
