import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { elementAt } from 'rxjs';
import { FruitModel } from '../models/fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

fruit : string ="";


fruits : FruitModel[] = [];

addStatus : boolean = true;
constructor(private toastr: ToastrService) {}


addFruit()
{
  this.addStatus =true;

  this.fruits.forEach(element => {
    if(element.name == this.fruit)
    {
      this.addStatus = false;

    }
  });

  if(this.addStatus)
  {
    let fruit =new FruitModel();
    fruit.name =this.fruit;
    fruit.date =Date();
    this.fruits.push(fruit);
    this.fruit ="";
    this.toastr.success('Başarıyla eklendi', 'Başarılı', {
      timeOut: 3000,
    });
  }
}


}
