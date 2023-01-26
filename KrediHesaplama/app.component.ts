import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  KrediTutari : number = 10000;
  Vade : number = 36;
  FaizTutari : number =  111.71;
  AylikOdemeniz : number = 0;
  ToplamGeriOdeme :number  = 0;


  Hesapla(){
    this.AylikOdemeniz = (this.KrediTutari / this.Vade  ) + this.FaizTutari;
    this.ToplamGeriOdeme = this.AylikOdemeniz * this.Vade;

  }


 
}
