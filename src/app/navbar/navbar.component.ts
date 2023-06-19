import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navclass: string = "marty-bar-pos";

  constructor(){
    window.addEventListener("scroll", this.reveal);
  }
  reveal() {
    var bar = document.querySelector("#bar-thing");
    var about = document.querySelector("#about")?.getBoundingClientRect().top;
    var experience = document.querySelector("#experience")?.getBoundingClientRect().top;
    var projects = document.querySelector("#projects")?.getBoundingClientRect().top;
    var contact = document.querySelector("#contact")?.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

      if (contact != null && contact + windowHeight - 5 < windowHeight) {
        bar?.removeAttribute("class");
        bar?.classList.add("contact");
      }
      else if (projects != null && projects + windowHeight - 5 < windowHeight) {
        bar?.removeAttribute("class");
        bar?.classList.add("projects");
      }
      else if (experience != null && experience + windowHeight - 5 < windowHeight) {
        bar?.removeAttribute("class");
        bar?.classList.add("experience");
      }
      else if (about != null && about + windowHeight - 5 < windowHeight) {
        bar?.removeAttribute("class");
        bar?.classList.add("about");
      }
      else{
        bar?.removeAttribute("class");
      }
  }

  getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    console.log(this.getScroll() + " " + window.innerHeight)
    this.navclass = (this.getScroll() < window.innerHeight) ? "marty-bar-pos" : "sticky-top";
  }
  
}
