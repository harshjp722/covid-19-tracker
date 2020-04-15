import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndiaService } from 'src/app/shared/services/india.service';

@Component({
  selector: 'app-india-list',
  templateUrl: './india-list.component.html',
  styleUrls: ['./india-list.component.css']
})
export class IndiaListComponent implements OnInit {
  trackerSummary: any;
  trackerReport: any;
  trackerLastUpdated: any;

  constructor(
    private indiaService: IndiaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIndiaData();
  }

  getIndiaData() {
    this.indiaService.getSummary().subscribe(res => {
      if (res && res.statewise) {
        this.trackerSummary = res.statewise.filter(f => f.statecode === 'TT')[0];
        this.trackerLastUpdated = this.trackerSummary.lastupdatedtime;
        this.trackerReport = res.statewise.filter(f => f.statecode !== 'TT');
        this.trackerReport.sort((a, b) => a.confirmed - b.confirmed).reverse();
      }
    });
  }

  viewDetails(state) {
    console.log(state, ' selected');
    this.router.navigate(['india/', state]);
  }

}
