import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteListFrontofficeComponent } from './universite-list-frontoffice.component';

describe('UniversiteListFrontofficeComponent', () => {
  let component: UniversiteListFrontofficeComponent;
  let fixture: ComponentFixture<UniversiteListFrontofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteListFrontofficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteListFrontofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
