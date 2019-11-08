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


import { VideopageComponent } from './component/videopage/videopage.component';
import { VideodetailComponent } from './component/videodetail/videodetail.component';

import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    VideopageComponent,
    VideodetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    CategoryManagementModule,
    HttpClientModule
  ],
  providers: [CookieService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
