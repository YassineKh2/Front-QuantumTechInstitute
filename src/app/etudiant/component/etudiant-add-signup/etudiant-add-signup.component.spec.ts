import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAddSignupComponent } from './etudiant-add-signup.component';

describe('EtudiantAddSignupComponent', () => {
  let component: EtudiantAddSignupComponent;
  let fixture: ComponentFixture<EtudiantAddSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantAddSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantAddSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
