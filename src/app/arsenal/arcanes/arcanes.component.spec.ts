import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcanesComponent } from './arcanes.component';

describe('ArcanesComponent', () => {
  let component: ArcanesComponent;
  let fixture: ComponentFixture<ArcanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
