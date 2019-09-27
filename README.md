# Angularssr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


---------------------------------------------------------------------------------------------------
                                         ROLE MANAGMENT
---------------------------------------------------------------------------------------------------



----------------------------------------Listing the Roles------------------------------------

    In order to hit the rolemangement library we need to send few specification from the app.

   .ts

    public roleListingConfig: any = {
    1.apiBaseUrl: "http://18.191.148.255:5009/",
    2.listEndPoint: "datalist",
    3.datasource: "",
    4.tableName: "rolemanagement",
    5.updateurl: "addorupdatedata",
    6.editUrl: "role-management/edit",
    7.jwtToken: "",
    8.deleteEndPoint: "deletesingledata",
    }

    The datasource is null but its value has to be generated in this page ,may it be from
    the resolver or as by the user.

    A sample example of fetching the datasource:

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get('jwtToken');
    this.activatedRoute.data.subscribe(resolveData => {
      this.roleListingConfig.datasource = resolveData.roleListData.res;
      this.roleListingConfig.jwtToken = this.cookieValue;
     
    });
  }
  
  .html

    <lib-rolemanagementlib [config]="roleListingConfig"></lib-rolemanagementlib>


-----------------------------------Add editing the Roles-----------------------------------

  For adding a role we need to send few specifications

   .ts

      public configAddEdit: any = {
      1. action: "add",
      2.endpoint: "http://18.191.148.255:5009/addorupdatedata",
      3.source: "rolemanagement",
      4.condition: {},
      5.defaultData: null,
      6.jwtToken: this.cookieService.get('jwtToken'),
      7.callBack: "role-management",
      8.userData: { id: "18801017007", name: "Admin" },
      }

   The  default data is null but its value has to be generated in this page,may it be from 
   the resover or as by the user.

    A sample exmaple of fetching the default data:
     this.activateRoute.params.subscribe(params => {
      if(params._id) {
        this.activateRoute.data.subscribe(resolveData => {
          this.configAddEdit.defaultData = resolveData.editData.res[0];
          this.configAddEdit.action = "edit";
          this.configAddEdit.condition = { id: params._id };
         
        });
      }
    }); 


   .html

    <lib-addeditlib [config]="configAddEdit"></lib-addeditlib>
