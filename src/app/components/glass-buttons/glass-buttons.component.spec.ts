import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassButtonsComponent } from './glass-buttons.component';

describe('GlassButtonsComponent', () => {
  let component: GlassButtonsComponent;
  let fixture: ComponentFixture<GlassButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlassButtonsComponent]
    });
    fixture = TestBed.createComponent(GlassButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
