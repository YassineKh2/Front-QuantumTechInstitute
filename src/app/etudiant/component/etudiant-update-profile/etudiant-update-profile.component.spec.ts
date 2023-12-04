import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantUpdateProfileComponent } from './etudiant-update-profile.component';

describe('EtudiantUpdateProfileComponent', () => {
  let component: EtudiantUpdateProfileComponent;
  let fixture: ComponentFixture<EtudiantUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
