import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarburantListComponent } from './carburant-list.component';

describe('CarburantListComponent', () => {
  let component: CarburantListComponent;
  let fixture: ComponentFixture<CarburantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarburantListComponent]
    });
    fixture = TestBed.createComponent(CarburantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
