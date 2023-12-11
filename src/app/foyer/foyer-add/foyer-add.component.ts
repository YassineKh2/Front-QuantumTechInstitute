import { Component, OnInit, ViewChild } from '@angular/core';
import { FoyerService } from '../../services/foyer.service';
import { Foyer } from '../../models/Foyer';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyer-add.component.html',
  styleUrls: ['./foyer-add.component.css'],
})
export class FoyerAddComponent {
  @ViewChild('FoyerForm', { static: true }) FoyerForm!: NgForm;
  NewFoyer: Foyer = {
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0,
    universite: undefined,
    blocs: undefined,
  };

  constructor(private foyerService: FoyerService, private router: Router) {}
  formSubmitted: boolean = false;
  isFirstCharUppercase(password: string): boolean {
    if (password.length === 0) {
      return true; // No restriction if the password is empty
    }
    return password[0] === password[0].toUpperCase();
  }
  addFoyer() {
    this.formSubmitted = true;
    if (this.FoyerForm.valid && this.isFirstCharUppercase(this.NewFoyer.nomFoyer)) {
      this.foyerService.AddFoyer(this.NewFoyer).subscribe(
        () => {
          this.router.navigateByUrl('/backoffice/foyer');
        },
        () => {
          console.log('failed');
        }
      );
    }
  }
}
