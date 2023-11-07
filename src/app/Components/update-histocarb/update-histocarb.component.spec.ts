import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHistocarbComponent } from './update-histocarb.component';

describe('UpdateHistocarbComponent', () => {
  let component: UpdateHistocarbComponent;
  let fixture: ComponentFixture<UpdateHistocarbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHistocarbComponent]
    });
    fixture = TestBed.createComponent(UpdateHistocarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
