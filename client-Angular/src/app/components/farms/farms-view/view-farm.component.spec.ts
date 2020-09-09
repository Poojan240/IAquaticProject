import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFarmComponent } from './view-farm.component';

describe('ViewFarmComponent', () => {
  let component: ViewFarmComponent;
  let fixture: ComponentFixture<ViewFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
