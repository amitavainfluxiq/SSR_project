import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerypage1Component } from './gallerypage1.component';

describe('Gallerypage1Component', () => {
  let component: Gallerypage1Component;
  let fixture: ComponentFixture<Gallerypage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallerypage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallerypage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
