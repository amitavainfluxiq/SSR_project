import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';



@Component({
  selector: 'app-teampage',
  templateUrl: './teampage.component.html',
  styleUrls: ['./teampage.component.css']
})
export class TeampageComponent implements OnInit {
  public TeamListArray:any=[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data.TeamListData.res;
      this.TeamListArray=result;
      // console.log("ojjjjjjjjhgdfhgdf",this.ServiceListArray);
      console.log(this.TeamListArray)

    })
  }

}
