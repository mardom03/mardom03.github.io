import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
declare var Flickity: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit() {
    setTimeout(() => {
      new Flickity(this.carousel.nativeElement, {
        groupCells: true,
        pageDots: false
      });
    }, 0);
  }

  jobs = [
    {
      company: "Skyward Inc.",
      image: "assets\\images\\skyward.jpg",
      title: "Software Engineer",
      duration: "June 2022 - February 2025",
      bullets: [
        "Contributed to the Professional Services team, working on a variety of tasks to ensure smooth development operations throughout the company",
        "Built C# web applications (ASP.NET, Blazor, MVC) for internal websites",
        "Integrated REST APIs to retrieve data from external systems, improving efficiency and data accuracy",
        "Managed databases with SQL queries for data retrieval, manipulation, and optimization",
        "Wrote and deployed IIS sites and Windows services to improve automation and development workflow",
        "Utilized GitHub for version control and managed workflows for our custom build processes",
        "Worked closely with migration teams to identify pain points and streamline data migration processes, resulting in smoother transitions for clients",
        "Acted as a primary point of contact for service calls, promptly resolving issues and providing technical assistance to developers and system managers",
        "Engaged in Agile development practices, participating in daily stand-up meetings and collaborating with cross-functional teams"
      ]
    },
    {
      company: "UW-Madison Dept. of IT",
      image: "assets\\images\\wisco.jpg",
      title: "Field Services Technologist",
      duration: "January 2022 - May 2022",
      bullets: [
        "Primarily responsible for installing, moving, removing, repairing and maintaining computer hardware, peripherals and applications on AIMS' managed clients",
        "Ensured that the devices and applications installed matches the inventory",
        "Installed workstation operating systems and applications from centrally maintained images and customized them for the user",
        "Created and maintained workstation images as needed as workstation hardware and software is updated",
        "Answered computer-related support request calls from AIMS customers, resolving problems reported via the calls, and entering and updating call status in our call management system",
        "Participated in planning, coordinating, and implementing new and modified systems",
        "Support of University Housing residents, staff, and housing computer labs (TLCs)",
        "Performed other tasks and projects as assigned related to end user support"
      ]
    }
  ]
}
