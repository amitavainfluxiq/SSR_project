import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { config } from 'rxjs';

@Component({
  selector: 'app-add-edit-lession',
  templateUrl: './add-edit-lession.component.html',
  styleUrls: ['./add-edit-lession.component.css']
})
export class AddEditLessionComponent implements OnInit {

  /* Config for add and edit start */
 


  public configAddEdit: any = {
    action: "add",
    endpoint: "http://18.191.148.255:5009/addorupdatedata",
    // listEndPoint: "addorupdatedata",
    source: "lession",
    condition: {},
    defaultData: null,
    jwtToken: this.cookieService.get('jwtToken'),
    callBack: "lession-management",
    userData: { id: "test-123", name: "Admin" },
  }
  /* Config for add and edit end */

  constructor(private router: Router, private activateRoute: ActivatedRoute, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      if (params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.lessionData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
          
        });


      }
    });
   
  }



}
