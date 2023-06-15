import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navclass: string = "marty-bar-pos";

  getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.navclass = (this.getScroll() < window.innerHeight) ? "marty-bar-pos" : "sticky-top";
  }
}
