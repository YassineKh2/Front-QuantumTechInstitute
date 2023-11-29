import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  etudiantName: string | null = null;

  ngOnInit(): void {
    // Retrieve etudiant from localStorage
    const etudiantString = localStorage.getItem('etudiant');

    if (etudiantString) {
      const etudiant = JSON.parse(etudiantString);
      this.etudiantName = etudiant.nomEt;
    }
  }
  logout(): void {
    // Clear etudiant from localStorage
    localStorage.removeItem('etudiant');
    // Redirect to login page
    this.router.navigateByUrl('/mainetudiants/etudiantLogin');
  }
}
