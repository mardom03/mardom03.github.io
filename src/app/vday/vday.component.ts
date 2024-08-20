import { Component } from '@angular/core';

@Component({
  selector: 'app-vday',
  templateUrl: './vday.component.html',
  styleUrls: ['./vday.component.css']
})
export class VdayComponent {
  buttonStyle = "font-size: 16px;";
  buttonText = "Yes";
  count = 0;

  buttonStyle2 = "background-color: darkred";
  buttonText2 = "No";

  buttonClick(){
    if(this.count < 10){
      this.count++;
      this.buttonStyle = "font-size: " + (16 +(4*this.count)) + "px;";
    }

    if(this.count == 1){
      this.buttonText = "of course Marty I love you so much";
    }
    else if(this.count == 2){
      this.buttonText = "yes you're the best boyfriend ever";
    }
    else if(this.count == 3){
      this.buttonText = "a thousand times yes";
    }
    else if(this.count == 4){
      this.buttonText = "yes I love you to the moon and back";
    }
    else if(this.count == 5){
      this.buttonText = "yes I literally can't live without you";
    }
    else if(this.count == 6){
      this.buttonText = "this is the yes button";
    }
    else if(this.count == 7){
      this.buttonText = "only furries click no";
    }
    else if(this.count == 8){
      this.buttonText = "click no, see if I care";
    }
    else if(this.count == 9){
      this.buttonText = "........................";
    }
    else if(this.count == 10){
      this.buttonStyle = "font-size: 16px;";
      this.buttonText = "Yes";
      this.buttonStyle2 = "background-color: #4CAF50";
      this.buttonText2 = "Yes";
      this.count++;
    }
    else{
      this.count++;
      this.success()
    }
  }

  success(){
    this.count = 12;
  }
}
