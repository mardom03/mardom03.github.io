import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  items = [
    {
      link: "mailto:martindomaradzki03@gmail.com",
      imgSrc: "assets\\images\\email.png",
      title: "Email",
      detail: "martindomaradzki03\u200B@gmail.com"
    },
    {
      link: "tel:+17152527459",
      imgSrc: "assets\\images\\phone.png",
      title: "Phone",
      detail: "+1 (715) 252-7459"
    },
    {
      link: "https://www.linkedin.com/in/martin-domaradzki-487058235/",
      imgSrc: "assets\\images\\linkedin-black.png",
      title: "Linkedin",
      detail: "@martin-domaradzki"
    },
    {
      link: "https://github.com/mardom03",
      imgSrc: "assets\\images\\github-black.png",
      title: "Github",
      detail: "@mardom03"
    }
  ]
}
