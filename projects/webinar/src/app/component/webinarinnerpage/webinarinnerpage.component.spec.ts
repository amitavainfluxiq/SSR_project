import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarinnerpageComponent } from './webinarinnerpage.component';

describe('WebinarinnerpageComponent', () => {
  let component: WebinarinnerpageComponent;
  let fixture: ComponentFixture<WebinarinnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarinnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarinnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
