import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteModifyComponent } from './universite-modify.component';

describe('UniversiteModifyComponent', () => {
  let component: UniversiteModifyComponent;
  let fixture: ComponentFixture<UniversiteModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
