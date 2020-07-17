import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import * as $ from 'jquery';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
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
        .to('.my-svg #Green_Star', {
          rotation: '360',
          duration: 15,
          repeat: -1,
          ease: 'linear',
          transformOrigin: '50% 50%',
        }, "+=0")
        .to('.my-svg #SVGID_x5F_1_x5F_', {
          rotation: '-360',
          duration: 19,
          repeat: -1,
          ease: 'linear',
          transformOrigin: '50% 50%',
        }, "+=2")
      gsap.to('.my-svg #Star', {
        scale: '1.5',
        rotation: '-360',
        duration: 9,
        repeat: -1,
        ease: "slow(1, 4, false)",
        yoyo: true,
        transformOrigin: '50% 50%',

      })
      gsap.to('.my-svg #Flower', {
        rotation: '360',
        scale: '2',
        yoyo: true,
        duration: 9,
        repeat: -1,
        ease: "slow(1, 8, true)",
        transformOrigin: '50% 50%',
      })







    });
  }

}
