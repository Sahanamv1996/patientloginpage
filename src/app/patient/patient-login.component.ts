import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector:'patient-login',
    templateUrl:'./patient-login.component.html'
})
//developed by sahana on 18-12-2020
export class PatientLoginComponent implements OnInit{
    //implement your code here by last approch...
    loginForm:any;
    //
    constructor(private formBuilder : FormBuilder){
      this.loginForm =  formBuilder.group({
            userName:['',[]],
            password:['',[]]
        });
    }
    ngOnInit():void{

    }
}
//ok