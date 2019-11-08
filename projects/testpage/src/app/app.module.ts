import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogModule } from 'blog';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { CookieService } from 'ngx-cookie-service';
import { CategoryManagementModule } from 'category-management';
import { Page1Component } from './component/page1/page1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ResolveService} from './resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    BlogModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    CategoryManagementModule,
    BrowserAnimationsModule
    //ResolveService
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]

})
export class AppModule { }
