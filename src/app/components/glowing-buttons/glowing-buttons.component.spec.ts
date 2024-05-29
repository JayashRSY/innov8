import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingButtonsComponent } from './glowing-buttons.component';

describe('GlowingButtonsComponent', () => {
  let component: GlowingButtonsComponent;
  let fixture: ComponentFixture<GlowingButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlowingButtonsComponent]
    });
    fixture = TestBed.createComponent(GlowingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
