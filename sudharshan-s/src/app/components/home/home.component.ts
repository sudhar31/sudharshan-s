import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isScrolled = false;
  isSubscribed: boolean = false;
  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    this.router.navigate(['/home']).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollOffset > 50;
  }


  //Skills Section TS
  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
  // Usage
  skills = [
    { icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=114474&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=w1Gq29w4RQWL&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=ut6gQeo5pNqf&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=16318&format=png&color=000000' },
    { icon: 'https://img.icons8.com/ios-filled/50/000000/git.png' },
    { icon: 'https://img.icons8.com/?size=100&id=q4RsigMwEQ0d&format=png&color=000000' }
  ];
  
  chunkedSkills = this.chunkArray(this.skills, 3);
  
  //Project section
  projects = [
    {
      id: 1,
      title: 'TinDog Designing Project (HTML, CSS, Bootstrap)',
      image: 'https://images.unsplash.com/photo-1536544753306-ca75d2e9f7d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'A web application for dog enthusiasts to connect with nearby dogs. Featuring a modern design with responsive layouts, interactive sections, and a user-friendly interface.',
      link: 'https://sudhar31.github.io/TinDog-Project/',
      showDetails: false
    },
    {
      id: 2,
      title: 'Amusement Park Ticketing System',
      image: 'https://images.unsplash.com/photo-1670337949149-01c519a0e846?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'A full-stack application developed with Spring Boot and Angular for managing amusement park tickets. It includes features for booking, viewing summaries, and real-time updates.',
      link: 'https://github.com/sudhar31/Amusement-Park-Ticketing-System-Project',
      showDetails: false
    },
    {
      id: 3,
      title: 'Glacial Bliss - A Icecream resturant',
      image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'A full-stack project utilizing Java Spring Boot for backend and Angular for a frontend, interactive user interface, managing ice cream and dessert orders with secure user authentication.',
      link: 'https://github.com/sudhar31/Glacial-Bliss',
      showDetails: false
    }
    
  ];

  toggle(id: number) {
    const sections = [
      ...this.projects
    ];
    const section = sections.find(s => s.id === id);
    if (section) {
      section.showDetails = !section.showDetails;
    }
  }

  onKeyPress(event: KeyboardEvent, id: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle(id);
    }
  }

  //footer section


  subscribe() {
    this.isSubscribed = true;
  }
}
