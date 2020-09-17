import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionProgressComponent } from './construction-progress.component';

describe('ConstructionProgressComponent', () => {
  let component: ConstructionProgressComponent;
  let fixture: ComponentFixture<ConstructionProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
