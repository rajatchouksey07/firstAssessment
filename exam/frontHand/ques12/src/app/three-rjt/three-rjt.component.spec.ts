import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeRJTComponent } from './three-rjt.component';

describe('ThreeRJTComponent', () => {
  let component: ThreeRJTComponent;
  let fixture: ComponentFixture<ThreeRJTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeRJTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeRJTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
