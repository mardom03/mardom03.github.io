import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceclass: string = "experience-page-init";

  constructor(){
    window.addEventListener("scroll", this.reveal);
  }

  getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.experienceclass = (this.getScroll() > window.innerHeight) ? "experience-page" : "experience-page-init";
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}

