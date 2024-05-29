import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassDropdownComponent } from './glass-dropdown.component';

describe('GlassDropdownComponent', () => {
  let component: GlassDropdownComponent;
  let fixture: ComponentFixture<GlassDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlassDropdownComponent]
    });
    fixture = TestBed.createComponent(GlassDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
