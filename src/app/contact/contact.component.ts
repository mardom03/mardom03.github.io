import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactclass: string = "contact-page-init";

  getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.contactclass = (this.getScroll() < window.innerHeight) ? "contact-page-init" : "contact-page";
  }
}
