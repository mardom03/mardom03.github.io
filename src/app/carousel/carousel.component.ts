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
      company: "Charter Communications",
      image: "assets\\images\\spectrum.jpg",
      title: "Associate Software Engineer",
      duration: "June 2025 - Present",
      bullets: [
        "Selected for a rotational Software Engineer program spanning web application development, cybersecurity, and service activation, supporting enterprise-scale internal and customer-facing systems",
        "Quickly ramped up on Angular and MongoDB to take ownership of a core web application feature (user calendar), delivering a full epic enabling create, edit, and delete workflows for recurring events",
        "Led end-to-end implementation of a major application component, collaborating with offshore development teams and delivering one of the team's primary quarterly deliverables",
        "Transitioned into a security-focused rotation supporting web application vulnerability validation and remediation efforts",
        "Served as the primary engineer responsible for post-remediation validation, confirming that fixes addressed previously identified web application vulnerabilities using Burp Suite",
        "Coordinated access and testing logistics across 50+ application teams, navigating diverse authentication and onboarding processes to unblock validation and release workflows",
        "Collaborated with senior penetration testers to execute structured vulnerability assessments using standardized checklists and workflows managed in AttackForge",
        "Built a Python (Tkinter) internal utility integrating with AttackForge APIs to automate time tracking and update engagement metadata, improving visibility into team workload and reducing manual effort",
        "Won first place in an internal hackathon by building an AI-assisted workflow tool using Claude to streamline stakeholder release approvals, reducing manual checkoffs and improving visibility across application delivery teams",
        "Demonstrated strong adaptability across disciplines, moving between product development, security engineering, and internal tooling within a short timeframe"
      ]
    },
    {
      company: "Skyward Inc.",
      image: "assets\\images\\skyward.jpg",
      title: "Associate DevOps Engineer",
      duration: "June 2022 - February 2025",
      bullets: [
        "Contributed to a Professional Services / Platform Engineering team supporting the company's release cycle, internal developer tooling, and customer-adjacent production systems",
        "Designed, built, and maintained internal C#/.NET applications (ASP.NET, Blazor, MVC) used to manage releases, environments, and operational workflows across engineering and QA",
        "Owned and refactored an internal platform managing hundreds of shared test environments for 300+ developers, enabling centralized provisioning, load-balanced usage, and improved developer velocity",
        "Led a redesign of the environment lifecycle system, introducing automated provisioning, renewal, and cleanup workflows that reduced manual setup time from ~1 hour to ~5 minutes",
        "Developed and maintained production Windows Services and IIS-hosted applications supporting customer data migrations, real-time monitoring, and internal operations",
        "Wrote complex SQL Server queries and database migrations to support real-time systems, improve observability, and resolve production issues",
        "Implemented GitHub Actions CI/CD pipelines to enforce coding standards, validate database migrations, automate builds, and streamline release workflows",
        "Supported customer data migration processes by debugging backend services, diagnosing production failures, and collaborating with cross-functional teams to resolve issues beyond simple restarts",
        "Served as a primary technical contact for service calls, resolving incidents, improving internal tooling, and reducing recurring operational pain points",
        "Worked within an Agile environment, collaborating closely with developers, QA, and operations to deliver reliable, production-grade systems"
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
