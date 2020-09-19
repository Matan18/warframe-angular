import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetusStatusComponent } from './cetus-status.component';

describe('CetusStatusComponent', () => {
  let component: CetusStatusComponent;
  let fixture: ComponentFixture<CetusStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetusStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetusStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
