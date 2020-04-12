import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigate(url) {
    this.inputSideNav.toggle();
    this.router.navigate([url]);
  }

}
