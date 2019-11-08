import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from './resolve.service';

import { TeampageComponent } from './component/teampage/teampage.component';
import { TeaminnerpageComponent } from './component/teaminnerpage/teaminnerpage.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: '', component: TeampageComponent,

   resolve: { TeamListData: ResolveService },

    data: { requestcondition: { source: 'team_view', condition: {} }, endpoint: 'datalist'}
  },

    { path: 'teaminnerpage', component: TeaminnerpageComponent,

        resolve: { TeamListData: ResolveService },

        data: { requestcondition: { source: 'team_view', condition: {} }, endpoint: 'datalist'}
    }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }