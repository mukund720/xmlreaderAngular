import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monitor';
  public validaUser =false;
  public application = true;
  public errorpage =false;

constructor(){

}
validateUser(user,password){

  if(user == 'admin' && password =='admin'){
  this.validaUser=true;
  this.application=false;
  
  console.log("valid");
  console.log( this.validaUser);
  }else{
    

    this.validaUser=false;
    this.application=true;
    window.location.href = 'http://localhost:4200/#/error'
   // console.log("in valid");
    alert("Enter valid username and password");
  }
}
  
  }


