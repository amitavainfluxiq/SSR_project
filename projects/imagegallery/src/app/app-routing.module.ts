import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveService } from './resolve.service';



import { Gallerypage1Component } from './component/gallerypage1/gallerypage1.component';
import { GalleryinnerpageComponent } from './component/galleryinnerpage/galleryinnerpage.component';

/* Routes path */
const appRoutes: Routes = [
  /* Blog Management Routes Start */
  { path: '', component: Gallerypage1Component,

   resolve: { TeamListData: ResolveService },

    data: { requestcondition: { source: 'files', condition: {} }, endpoint: 'datalist'}
  },

    { path: 'galleryinnerpage', component: GalleryinnerpageComponent,

        resolve: { TeamListData: ResolveService },

        data: { requestcondition: { source: 'files', condition: {} }, endpoint: 'datalist'}
    },




];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }