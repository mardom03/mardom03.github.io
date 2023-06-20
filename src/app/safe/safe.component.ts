import { Component } from '@angular/core';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.css']
})
export class SafeComponent {
  calculate() {
    var ml = parseInt((document.getElementById("input1") as HTMLInputElement).value);
    var percent = parseInt((document.getElementById("input2") as HTMLInputElement).value);
    percent = percent / 100;
    var drinks = ml * 0.03519508 * percent / .6;
    document.getElementById("result").innerHTML = "Result: " + drinks.toFixed(3) + " standard drinks";
}
}
