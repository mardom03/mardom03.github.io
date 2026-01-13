import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(){ }
  
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  reveal() {
    const bar = document.querySelector("#bar-thing");
    const about = document.querySelector("#about")?.getBoundingClientRect().top;
    const experience = document.querySelector("#experience")?.getBoundingClientRect().top;
    const projects = document.querySelector("#projects")?.getBoundingClientRect().top;
    const contact = document.querySelector("#contact")?.getBoundingClientRect().top;
    const threshold = 50;

    // clear first
    bar?.removeAttribute("class");

    if (contact != null && contact < threshold) {
      bar?.classList.add("contact");
    }
    else if (projects != null && projects < threshold) {
      bar?.classList.add("projects");
    }
    else if (experience != null && experience < threshold) {
      bar?.classList.add("experience");
    }
    else if (about != null && about < threshold) {
      bar?.classList.add("about");
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.reveal();

    const nav = document.querySelector('.marty-bar');
  }
  
}
