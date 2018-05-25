import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRJTComponent } from './one-rjt.component';

describe('OneRJTComponent', () => {
  let component: OneRJTComponent;
  let fixture: ComponentFixture<OneRJTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneRJTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRJTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
