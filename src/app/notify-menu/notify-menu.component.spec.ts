import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyMenuComponent } from './notify-menu.component';

describe('NotifyMenuComponent', () => {
  let component: NotifyMenuComponent;
  let fixture: ComponentFixture<NotifyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
