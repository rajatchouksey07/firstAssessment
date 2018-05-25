import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoRJTComponent } from './two-rjt.component';

describe('TwoRJTComponent', () => {
  let component: TwoRJTComponent;
  let fixture: ComponentFixture<TwoRJTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoRJTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoRJTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
