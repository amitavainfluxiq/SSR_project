import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarpageComponent } from './webinarpage.component';

describe('WebinarpageComponent', () => {
  let component: WebinarpageComponent;
  let fixture: ComponentFixture<WebinarpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
