import { Component } from '@angular/core';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiant-profile',
  templateUrl: './etudiant-profile.component.html',
  styleUrls: ['./etudiant-profile.component.css']
})
export class EtudiantProfileComponent {
  constructor(private etudiantService:EtudiantService) { }
  etudiants: Etudiant = new Etudiant();
  ngOnInit() {
    const storedData = localStorage.getItem('etudiant');
    if (storedData) {
    const etudiant: Etudiant = JSON.parse(storedData);
    this.etudiantService.etudiantProfileDetail(etudiant).subscribe(data => {
      this.etudiants = data;
    });
    }
  }
  pdfGenerate(): void {
    const storedData = localStorage.getItem('etudiant');
    if (storedData) {
      const etudiant: Etudiant = JSON.parse(storedData);
      this.etudiantService.generatePdf(etudiant).subscribe(
        (blob: Blob) => {
          // Create a Blob URL for the PDF blob
          const fileURL = window.URL.createObjectURL(blob);
  
          // Create a new tab/window and navigate to the Blob URL
          const newTab = window.open(fileURL, '_blank');
          if(newTab != null)
          newTab.document.title = 'Profile.pdf';
          // Set the title of the new tab/window to 'Profile.pdf'
          newTab?.addEventListener('load', () => {
            if (newTab) {
              newTab.document.title = 'Profile.pdf';
            }
          });
        },
        (error) => {
          console.error('Error generating PDF:', error);
        }
      );
      }}
  
}
