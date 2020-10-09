import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuvaComponent } from './kuva.component';

describe('KuvaComponent', () => {
  let component: KuvaComponent;
  let fixture: ComponentFixture<KuvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
