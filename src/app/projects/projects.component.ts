import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      link: "https://github.com/mardom03/cashflow-assistant",
      title: "QuickBooks Cashflow Assistant",
      description: "Flask web app that connects to QuickBooks Online API to provide cashflow insights (Python)",
      year: 2026
    },
    {
      link: "https://github.com/mardom03/DCR-verification",
      title: "DCR Graph Tool (with system architecture report)",
      description: "University of Copenhagen software architecture project for drawing and verifying business process models (React)",
      year: 2024
    },
    {
      link: "https://github.com/mardom03/Vix-Emailer",
      title: "Vix Emailer",
      description: "Simple Windows service to scrape Yahoo Finance and email me when VIX is high (C#)",
      year: 2023
    },
    {
      link: "https://github.com/mardom03/mardom03.github.io",
      title: "(This) Personal Website",
      description: "You're looking at it, in all its glory (Angular, Bootstrap, Tailwind, HTML, CSS, Javascript, Github Pages)",
      year: 2023
    },
    {
      link: "https://github.com/mardom03/scheduler",
      title: "CLI Course Scheduler",
      description: "Console app for generating course schedules (Java)",
      year: 2021
    },
    {
      link: "https://github.com/Cdogsnappy/Chess-Game",
      title: "CLI Chess Game",
      description: "Basic console chess game (Python)",
      year: 2021
    }
  ]
}
