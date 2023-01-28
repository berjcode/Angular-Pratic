import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

fruit : string ="";


fruits : string[] = ["elma","muz","ayva"];

addStatus : boolean = true;

addFruit()
{
  this.addStatus =true;

  this.fruits.forEach(element => {
    if(element == this.fruit)
    {
      this.addStatus = false;

    }
  });

  if(this.addStatus)
  {
    this.fruits.push(this.fruit);
    this.fruit ="";
  }
}


}
