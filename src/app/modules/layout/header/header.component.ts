import { Component, OnInit, AfterViewInit, Inject, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;

  constructor() {}

  ngOnInit(): void {
  }
}
