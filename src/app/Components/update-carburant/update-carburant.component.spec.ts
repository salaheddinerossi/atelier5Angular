import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarburantComponent } from './update-carburant.component';

describe('UpdateCarburantComponent', () => {
  let component: UpdateCarburantComponent;
  let fixture: ComponentFixture<UpdateCarburantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCarburantComponent]
    });
    fixture = TestBed.createComponent(UpdateCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
