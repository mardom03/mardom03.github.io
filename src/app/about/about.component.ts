import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutclass: string = "about-page-init";

  getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.aboutclass = (this.getScroll() < window.innerHeight) ? "about-page-init" : "about-page";
  }
}
