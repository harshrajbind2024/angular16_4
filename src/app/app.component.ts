import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fourth';

  constructor(){}

  ngOnInit(): void {
    
  }

  Register(val:any){

    // // debug 
    // debugger;
    // var firstname=val.controls.firstname.value;
    // var lastname=val.controls.lastname.value;
    // var email=val.controls.Email.value;
    //   console.log(firstname);
      
  
    console.log("regForm",val);
    

  }
}
