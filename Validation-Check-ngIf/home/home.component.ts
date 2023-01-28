import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  email : string = "";
  password : string ="";
  check :boolean =false;
  button:boolean=false;

  checkAvaible()
  {
    if(this.email != "" && this.password != "" && this.check == true)
    {
      this.button=true;
    }else
    {
      this.button=false;
    }
  }

  changeClass(value:string)
  {
    if(value !=""){
      return "form-control success-validation";
    }else
    {
      return  "form-control error-validation";
    }
    
  }

}
