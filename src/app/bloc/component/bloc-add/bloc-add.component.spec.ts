import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocAddComponent } from './bloc-add.component';

describe('BlocAddComponent', () => {
  let component: BlocAddComponent;
  let fixture: ComponentFixture<BlocAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
