import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FruitModel } from '../models/fruit';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent {
  @Input()  fruits: FruitModel[] = [];
  
  constructor(private toastr: ToastrService) {}

  deleteItem(fruit:FruitModel)
  {
    let index : number  = this.fruits.indexOf(fruit);

    console.log(fruit);
    this.fruits.splice(index,1);
    this.toastr.info("Silme işlemi başarılı", "Silme İşlemi")
  }
}
