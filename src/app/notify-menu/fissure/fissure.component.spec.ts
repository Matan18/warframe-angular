import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FissureComponent } from './fissure.component';

describe('FissureComponent', () => {
  let component: FissureComponent;
  let fixture: ComponentFixture<FissureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FissureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FissureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
