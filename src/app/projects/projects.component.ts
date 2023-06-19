import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsclass: string = "projects-page-init";

  getScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.projectsclass = (this.getScroll() < window.innerHeight) ? "projects-page-init" : "projects-page";
  }
}
