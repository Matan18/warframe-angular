import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvasionComponent } from './invasion.component';

describe('InvasionComponent', () => {
  let component: InvasionComponent;
  let fixture: ComponentFixture<InvasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvasionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
