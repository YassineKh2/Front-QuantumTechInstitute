import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerModifyComponent } from './foyer-modify.component';

describe('UniversiteModifyComponent', () => {
  let component: FoyerModifyComponent;
  let fixture: ComponentFixture<FoyerModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
