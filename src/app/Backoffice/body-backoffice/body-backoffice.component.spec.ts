import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBackofficeComponent } from './body-backoffice.component';

describe('BodyBackofficeComponent', () => {
  let component: BodyBackofficeComponent;
  let fixture: ComponentFixture<BodyBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBackofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
