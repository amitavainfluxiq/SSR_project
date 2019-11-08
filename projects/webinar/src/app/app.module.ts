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

import { WebinarpageComponent, WebinarsDetail } from './component/webinarpage/webinarpage.component';
import { WebinarinnerpageComponent } from './component/webinarinnerpage/webinarinnerpage.component';

import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    WebinarpageComponent,
    WebinarinnerpageComponent,
    WebinarsDetail
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
  entryComponents: [WebinarsDetail ],
  providers: [CookieService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
