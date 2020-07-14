import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faAirFreshener = faAirFreshener;


  //Parallax configurations
  innerHeaderContainer: IParallaxScrollConfig = {
    parallaxSpeed: 0,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 0
  };

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      alert('we call alert from JQuery');
    });
  }

}
