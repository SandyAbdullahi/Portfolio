import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faAirFreshener = faAirFreshener;


  //Parallax configurations
  innerHeaderContainer: IParallaxScrollConfig = {
    parallaxSpeed: 0.4,
    parallaxSmoothness: 0.1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 8
  };

  constructor() { }

  ngOnInit(): void {
  }

}
