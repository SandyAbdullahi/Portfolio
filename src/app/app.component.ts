import { Component, OnInit } from '@angular/core';
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faFish = faFish;

  WorkStatusConfig: IParallaxScrollConfig = {
    parallaxSpeed: 0.2,
    parallaxSmoothness: 0.1,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease',
    parallaxThrottleTime: 1
  };


  ngOnInit(): void {

  }
}
