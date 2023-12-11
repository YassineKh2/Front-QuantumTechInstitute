import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubModifyComponent } from './club-modify.component';

describe('ClubModifyComponent', () => {
  let component: ClubModifyComponent;
  let fixture: ComponentFixture<ClubModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
