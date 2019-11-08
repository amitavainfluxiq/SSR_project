import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";



export interface DialogData {
  title: any;
  name: any;
}


import { ApiService } from '../../app-api.service';
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-galleryinnerpage',
  templateUrl: './galleryinnerpage.component.html',
  styleUrls: ['./galleryinnerpage.component.css']
})
export class GalleryinnerpageComponent implements OnInit {

  public result: any;
  public dateChange: any = '';
  constructor(   public dialog: MatDialog, public apiServic: ApiService, public activatedRoute: ActivatedRoute, public router: Router ) { window.scrollTo(500, 0);}



  ngOnInit() {
    this.activatedRoute.data.forEach(data=> {

      this.result = data.TeamListData.res;
      console.log(this.result)
    });
  }



  openDialog(item:any): void {

    console.log(item);
    console.log(this.dateChange);
    const dialogRef = this.dialog.open(GalleryinnerZoom, {
      // width: '250px',
      //data: {name: this.name, animal: this.animal}    fileservername
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}


@Component({
  selector: 'galleryinnerzoom',
  templateUrl: 'galleryinnerzoom.html',
})


export class GalleryinnerZoom {

  constructor(
      public dialogRef: MatDialogRef<GalleryinnerZoom>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
