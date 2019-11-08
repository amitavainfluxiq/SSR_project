import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryinnerpageComponent } from './galleryinnerpage.component';

describe('GalleryinnerpageComponent', () => {
  let component: GalleryinnerpageComponent;
  let fixture: ComponentFixture<GalleryinnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryinnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryinnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
