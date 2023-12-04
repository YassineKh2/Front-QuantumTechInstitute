import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationListBackOfficeComponent } from './reclamation-list-back-office.component';

describe('ReclamationListBackOfficeComponent', () => {
  let component: ReclamationListBackOfficeComponent;
  let fixture: ComponentFixture<ReclamationListBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationListBackOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationListBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
