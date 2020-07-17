import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import * as $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faAirFreshener = faAirFreshener;



  //Parallax configurations
  innerHeaderContainer: IParallaxScrollConfig = {
    parallaxSpeed: 0.7,
    parallaxSmoothness: 0.2,
    parallaxDirection: 'reverse',
    parallaxTimingFunction: 'linear',
    parallaxThrottleTime: 1
  };

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      const tl = gsap.timeline();


      tl.to(".navbar", {
        scrollTrigger: {
          trigger: ".trigger-1",
          toggleActions: "restart none none reset",
        },
        position: "relative",
        backgroundColor: "#52FFB8",
        bottom: "0",
        color: "#fff",
      })
        .to('.my-svg polygon', {
          rotation: '360',
          duration: 15,
          repeat: -1,
          ease: 'linear',
          transformOrigin: '50% 50%',
        }, "+=0")
        .to('.my-svg .st2', {
          rotation: '360',
          duration: 9,
          repeat: -1,
          ease: 'linear',
          transformOrigin: '50% 50%',
        })

      gsap.to('.my-svg .st1', {
        scale: '1.5',
        rotation: '-360',
        duration: 9,
        repeat: -1,
        ease: "slow(0.7, 0.7, false)",
        transformOrigin: '50% 50%',
        yoyo: true,
      })






    });
  }

}
