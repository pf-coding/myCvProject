import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMainComponent } from './cv-main.component';

describe('CvMainComponent', () => {
  let component: CvMainComponent;
  let fixture: ComponentFixture<CvMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
