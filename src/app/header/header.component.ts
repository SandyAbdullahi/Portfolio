import { Component, OnInit } from '@angular/core';
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faAirFreshener = faAirFreshener;

  constructor() { }

  ngOnInit(): void {
  }

}
