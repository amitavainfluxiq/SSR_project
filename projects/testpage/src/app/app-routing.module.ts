import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from './resolve.service';

import { Page1Component } from './component/page1/page1.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: '', component: Page1Component,

    resolve: { categoryListData: ResolveService },

    data: { requestcondition: { source: 'category', condition: {} }, endpoint: 'datalist'}
  },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }