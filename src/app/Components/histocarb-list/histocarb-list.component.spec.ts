import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistocarbListComponent } from './histocarb-list.component';

describe('HistocarbListComponent', () => {
  let component: HistocarbListComponent;
  let fixture: ComponentFixture<HistocarbListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistocarbListComponent]
    });
    fixture = TestBed.createComponent(HistocarbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
