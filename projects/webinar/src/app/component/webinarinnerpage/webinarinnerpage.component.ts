import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-webinarinnerpage',
  templateUrl: './webinarinnerpage.component.html',
  styleUrls: ['./webinarinnerpage.component.css']
})
export class WebinarinnerpageComponent implements OnInit {

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

}
