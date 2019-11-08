import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { ResolveService } from './resolve.service';*/



import { VideopageComponent } from './component/videopage/videopage.component';
import { VideodetailComponent } from './component/videodetail/videodetail.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: '', component: VideopageComponent,


  },

    { path: 'videodetail', component: VideodetailComponent,


    },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }