import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll'
import * as $ from 'jquery';
import * as Rellax from 'rellax';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      var rellax = new Rellax('.rellax', {
      });

      const tl = gsap.timeline();

      gsap.fromTo(".card", {
        scrollTrigger: {
          trigger: ".trigger-3",
          toggleActions: "restart none none reset",
        },
        duration: 1,
        backgroundColor: "hsl(5,6,35)",
      },
        {
          scrollTrigger: {
            trigger: ".trigger-",
            toggleActions: "restart none none reset",
          },
          duration: 1.8,
          ease: "power2.inOut",
          backgroundColor: "hsl(155,100,66, 0.8)",
        }
      )
    })
  }

}
