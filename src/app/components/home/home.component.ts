import { HomeService } from './../../shared/services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trackerSummary: any;
  trackerReport: any;
  trackerLastUpdated: any;
  pagedItems: any;
  startIndex = 0;
  isDummyData = false;

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSummaryData();
  }

  getSummaryData() {
    this.homeService.getSummary().subscribe(res => {
      if (res && res.Global) {
        this.isDummyData = false;
        this.trackerSummary = res.Global;
        this.trackerLastUpdated = res.Date;
        this.trackerReport = res.Countries;
        this.trackerReport.forEach(f => {
          f.Active = f.TotalConfirmed - (f.TotalRecovered + f.TotalDeaths);
        });
        this.trackerReport.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed).reverse();
      } else {
        this.getSummaryDummyData();
      }
    }, err => {
      this.getSummaryDummyData();
    }
    );
  }

  getSummaryDummyData() {
    this.homeService.getSummaryDummy().subscribe(res => {
      if (res) {
        this.isDummyData = true;
        this.trackerSummary = res.Global;
        this.trackerLastUpdated = res.Date;
        this.trackerReport = res.Countries;
        this.trackerReport.forEach(f => {
          f.Active = f.TotalConfirmed - (f.TotalRecovered + f.TotalDeaths);
        });
        this.trackerReport.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed).reverse();
        console.log(this.trackerReport);
      }
    });
  }

  onChangePage(pageOfItems) {
    // update current page of items
    this.pagedItems = pageOfItems;
  }

  viewCountryDetails(country) {
    this.router.navigate(['country', country.Slug]);
  }
}
