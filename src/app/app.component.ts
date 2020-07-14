import { Component, OnInit } from '@angular/core';
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faFish = faFish;

  WorkStatusConfig: IParallaxScrollConfig = {
    parallaxSpeed: 0,
    parallaxSmoothness: 0,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'ease',
    parallaxThrottleTime: 0
  };


  ngOnInit(): void {
    gsap.set("app-header", {
      y: -window.pageYOffset
    });
  }
}
