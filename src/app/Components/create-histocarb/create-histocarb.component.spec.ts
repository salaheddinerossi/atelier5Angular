import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHistocarbComponent } from './create-histocarb.component';

describe('CreateHistocarbComponent', () => {
  let component: CreateHistocarbComponent;
  let fixture: ComponentFixture<CreateHistocarbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHistocarbComponent]
    });
    fixture = TestBed.createComponent(CreateHistocarbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
