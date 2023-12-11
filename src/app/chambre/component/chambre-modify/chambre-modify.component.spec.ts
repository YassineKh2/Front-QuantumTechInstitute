import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreModifyComponent } from './chambre-modify.component';

describe('ChambreModifyComponent', () => {
  let component: ChambreModifyComponent;
  let fixture: ComponentFixture<ChambreModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
