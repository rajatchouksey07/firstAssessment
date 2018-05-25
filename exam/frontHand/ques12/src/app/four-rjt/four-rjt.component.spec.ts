import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourRJTComponent } from './four-rjt.component';

describe('FourRJTComponent', () => {
  let component: FourRJTComponent;
  let fixture: ComponentFixture<FourRJTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourRJTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourRJTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
