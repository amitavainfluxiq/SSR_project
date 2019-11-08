import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material-module';
import { CookieService } from 'ngx-cookie-service';
import { CategoryManagementModule } from 'category-management';
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { GalleryinnerpageComponent, GalleryinnerZoom } from './component/galleryinnerpage/galleryinnerpage.component';
import { Gallerypage1Component,GalleryinnerZoomone } from './component/gallerypage1/gallerypage1.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,

    GalleryinnerpageComponent,

    GalleryinnerZoom,
    Gallerypage1Component,
    GalleryinnerZoomone
  ],
  imports: [
    BrowserModule,

    RouterModule,
    AppRoutingModule,
    MaterialModule,
    CategoryManagementModule,
    BrowserAnimationsModule,


    HttpClientModule
  ],

  entryComponents: [  GalleryinnerZoom, GalleryinnerZoomone],
  providers: [CookieService,DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
