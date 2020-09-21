import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthcycleComponent } from './earthcycle.component';

describe('EarthcycleComponent', () => {
  let component: EarthcycleComponent;
  let fixture: ComponentFixture<EarthcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
