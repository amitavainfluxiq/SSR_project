import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaminnerpageComponent } from './teaminnerpage.component';

describe('TeaminnerpageComponent', () => {
  let component: TeaminnerpageComponent;
  let fixture: ComponentFixture<TeaminnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaminnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaminnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
