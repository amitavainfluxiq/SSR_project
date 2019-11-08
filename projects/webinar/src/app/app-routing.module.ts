import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from './resolve.service';



import { WebinarpageComponent } from './component/webinarpage/webinarpage.component';
import { WebinarinnerpageComponent } from './component/webinarinnerpage/webinarinnerpage.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: '', component: WebinarpageComponent,
    resolve: { WebinarListData: ResolveService },
    data: { requestcondition: { source: 'webinar', condition: {} }, endpoint: 'datalist'}

  },

    { path: 'webinarinnerpage', component: WebinarinnerpageComponent,

      resolve: { WebinarListData: ResolveService },
      data: { requestcondition: { source: 'webinar', condition: {} }, endpoint: 'datalist'}
    },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }