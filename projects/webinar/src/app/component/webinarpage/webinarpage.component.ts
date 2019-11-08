import {Component, OnInit, Inject} from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  title: any;
  description: any;
  date: any;
  time: any;
  link: any;
}

@Component({
  selector: 'app-webinarpage',
  templateUrl: './webinarpage.component.html',
  styleUrls: ['./webinarpage.component.css']
})
export class WebinarpageComponent implements OnInit {

  public WebinarListArray:any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) { window.scrollTo(500, 0);}

  ngOnInit() {

    this.activatedRoute.data.forEach(data =>{
      let result:any = {};
      result=data;
      this.WebinarListArray=result.WebinarListData.res;
      //console.log("ojjjjjjjjhgdfhgdf",this.WebinarListArray);


    });
  }



  openDialog(itemVal:any): void {
    console.log(itemVal)
    const dialogRef = this.dialog.open(WebinarsDetail, {
      //width: '250px',
      data: {description: itemVal.description, title: itemVal.title, date: itemVal.date, time: itemVal.time, link: itemVal.link}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }

}


@Component({
  selector: 'webinarsdetail',
  templateUrl: 'webinarsdetail.html',
})


export class WebinarsDetail {

  constructor(
      public dialogRef: MatDialogRef<WebinarsDetail>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}