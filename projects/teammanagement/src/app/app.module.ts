import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { CookieService } from 'ngx-cookie-service';
import { CategoryManagementModule } from 'category-management';
import { HttpClientModule } from "@angular/common/http";





import { TeampageComponent } from './component/teampage/teampage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeaminnerpageComponent, dialogoverview, dialogoverviewdetail } from './component/teaminnerpage/teaminnerpage.component';




@NgModule({
  declarations: [
    AppComponent,
    TeampageComponent,
    TeaminnerpageComponent,
    dialogoverview,
    dialogoverviewdetail
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
  entryComponents: [dialogoverview, dialogoverviewdetail],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
