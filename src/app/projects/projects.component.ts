import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import * as $ from 'jquery';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectOneConfig: IParallaxScrollConfig = {
    parallaxSpeed: 0,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease',
    parallaxThrottleTime: 0
  };

  projectTwoConfig: IParallaxScrollConfig = {
    parallaxSpeed: 0,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease',
    parallaxThrottleTime: 0
  };

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {



    })
  }

}
