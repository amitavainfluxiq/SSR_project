import {Component, OnInit, Inject} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: any;
  description: any;
  department: any;
  contact: any;
  email: any;
}

export interface DialogDataLink {
  title: any;
  name: any;
}



@Component({
  selector: 'app-teaminnerpage',
  templateUrl: './teaminnerpage.component.html',
  styleUrls: ['./teaminnerpage.component.css']
})
export class TeaminnerpageComponent  implements OnInit {



  public TeamListArray:any=[];
private allValueLength: any;
  showMore = false;
  public indexval:any = 4;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public dialog: MatDialog) { window.scrollTo(500, 0);}

  ngOnInit() {

    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.TeamListData.res;
      this.TeamListArray=result;

      //console.log(this.TeamListArray)
this.allValueLength = this.TeamListArray.length;
      // console.log(this.allValueLength)
    })
  }




  scroll(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }

  showMoreFunc(){

    this.indexval = this.indexval + 4;
  console.log(this.indexval)
  }


  openDialog(itemVal:any): void {
    console.log(itemVal)
    const dialogRef = this.dialog.open(dialogoverview, {
      //width: '250px',
      data: {description: itemVal.description, title: itemVal.title, department: itemVal.department, contact: itemVal.contact, email: itemVal.email }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }

  openDialoglink(itemVal:any): void {
    console.log(itemVal);
    const dialogRef = this.dialog.open(dialogoverviewdetail, {
      //width: '250px',
     data: {name: itemVal.description, title: itemVal.title}

    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }



/*
  moveshow= function () {
    this.router.navigateByUrl('/teamiconblockdetail');
  };
*/
/*
  status: boolean = false;
  public value: any = 0 ;

  clickEvent(val: any){
this.value = val;
    this.status = !this.status;
    console.log(val)
  }*/



}


@Component({
  selector: 'dialogoverview',
  templateUrl: 'dialog.html',
})

export class dialogoverview {



  constructor(
      public dialogRef: MatDialogRef<dialogoverview>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  status: boolean = false;
  clickEvent(){
    this.status = !this.status;
  }
}



@Component({
  selector: 'dialogoverviewdetail',
  templateUrl: 'dialogdetail.html',
})

export class dialogoverviewdetail {

  constructor(
      public dialogRef: MatDialogRef<dialogoverviewdetail>,
      @Inject(MAT_DIALOG_DATA) public data: DialogDataLink) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}