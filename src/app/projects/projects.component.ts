import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectConfig: IParallaxScrollConfig = {
    parallaxSpeed: 0.6,
    parallaxSmoothness: 0.2,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease',
    parallaxThrottleTime: 8
  };

  constructor() { }

  ngOnInit(): void {
  }

}