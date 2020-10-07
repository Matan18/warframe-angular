import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframesComponent } from './warframes.component';

describe('WarframesComponent', () => {
  let component: WarframesComponent;
  let fixture: ComponentFixture<WarframesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarframesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
