import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VallisStatusComponent } from './vallis-status.component';

describe('VallisStatusComponent', () => {
  let component: VallisStatusComponent;
  let fixture: ComponentFixture<VallisStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VallisStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VallisStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
