import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/Etudiant';
import { Reclamation } from 'src/app/models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { PopupComponent } from '../popup/popup.component';

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
 
  /*deleteReclamation(idReclamation: number | undefined): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        message: 'Are you sure you want to delete?',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.reclamationService.deleteReclamation(idReclamation).subscribe(data => {
          this.reclamations = this.reclamations.filter(reclamation => reclamation.idReclamation !== idReclamation);
        });
        console.log('Delete confirmed');
      } else {
        // User canceled deletion
        console.log('Delete canceled');
      }
    });
    this.reclamationService.deleteReclamation(idReclamation).subscribe(data => {
      this.reclamations = this.reclamations.filter(reclamation => reclamation.idReclamation !== idReclamation);
    });
  }*/
  isDeleteConfirmationVisible = false;
  reclamationToDeleteId: number | undefined;

  // ... other code ...

  deleteReclamationConfirmation(idReclamation: number | undefined): void {
    this.isDeleteConfirmationVisible = true;
    this.reclamationToDeleteId = idReclamation;
  }

  onConfirmDelete(confirmed: boolean): void {
    if (confirmed) {
      // User confirmed deletion, perform delete operation
      // Call your delete service method here
      console.log('Delete confirmed');
      if (this.reclamationToDeleteId) {
        this.reclamationService.deleteReclamation(this.reclamationToDeleteId).subscribe(() => {
          this.reclamations = this.reclamations.filter(reclamation => reclamation.idReclamation !== this.reclamationToDeleteId);
          this.closeDeleteConfirmation();
        });
      }
    } else {
      // User canceled deletion
      console.log('Delete canceled');
      this.closeDeleteConfirmation();
    }
  }

  closeDeleteConfirmation(): void {
    this.isDeleteConfirmationVisible = false;
    this.reclamationToDeleteId = undefined;
  }
}
