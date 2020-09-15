import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarvoDetailComponent } from './darvo-detail.component';

describe('DarvoDetailComponent', () => {
  let component: DarvoDetailComponent;
  let fixture: ComponentFixture<DarvoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarvoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarvoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
