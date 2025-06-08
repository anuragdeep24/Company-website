import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  projectsDelivered: number = 0;
  happyClients: number = 0;
  support: number = 0;

  ngOnInit(): void {
    this.animateCounter('projectsDelivered', 50, 25);
    this.animateCounter('happyClients', 10, 120);
    this.animateCounter('support', 5, 50);
  }

  animateCounter(property: 'projectsDelivered' | 'happyClients' | 'support', target: number, speed: number): void {
    let interval = setInterval(() => {
      if (this[property] < target) {
        this[property]++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }
}
