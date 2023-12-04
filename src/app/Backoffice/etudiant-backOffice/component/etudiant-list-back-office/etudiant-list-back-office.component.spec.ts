import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantListBackOfficeComponent } from './etudiant-list-back-office.component';

describe('EtudiantListBackOfficeComponent', () => {
  let component: EtudiantListBackOfficeComponent;
  let fixture: ComponentFixture<EtudiantListBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantListBackOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantListBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
