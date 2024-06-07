import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dice';
   firstNumber:number=0;
   secondNumber:number=0;
   winner1!:string;
  //  constructor(){
  //   this.firstNumber=0;
  //   this.secondNumber=0;
  //  }
   getNumber():void{
     this.firstNumber = Math.floor(Math.random()*6)+1;
     this.secondNumber = Math.floor(Math.random()*6)+1;
     if(this.firstNumber>this.secondNumber)
     {
       console.log(this.winner1);
       this.winner1 = "First Win!!"
     }
     else if(this.firstNumber<this.secondNumber){
       this.winner1 = "Second Win!!"
     }
     else if(this.firstNumber==this.secondNumber)
     {
       this.winner1 =  "Draw!!"
     }
   }
   resetNumbers(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
  }
}
