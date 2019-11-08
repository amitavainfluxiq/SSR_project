import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

export interface DialogData {
  title: any;
  name: any;

}
import { ApiService } from '../../app-api.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-gallerypage1',
  templateUrl: './gallerypage1.component.html',
  styleUrls: ['./gallerypage1.component.css']
})
export class Gallerypage1Component implements OnInit {
  public result: any;
  public dateChange: any = '';
  constructor(   public dialog: MatDialog, public apiServic: ApiService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=> {

      this.result = data.TeamListData.res;
      console.log(this.result)
    });
  }

  openDialog(item:any): void {
    console.log(this.dateChange)
    const dialogRef = this.dialog.open(GalleryinnerZoomone, {
      // width: '250px',
      //data: {name: this.name, animal: this.animal}

      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }



}




@Component({
  selector: 'galleryinnerzoomone',
  templateUrl: 'galleryzoomone.html',
})


export class GalleryinnerZoomone {

  constructor(
      public dialogRef: MatDialogRef<GalleryinnerZoomone>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

