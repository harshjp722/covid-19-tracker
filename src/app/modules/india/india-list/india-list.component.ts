import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndiaService } from 'src/app/shared/services/india.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-india-list',
  templateUrl: './india-list.component.html',
  styleUrls: ['./india-list.component.css']
})
export class IndiaListComponent implements OnInit {
  trackerSummary: any;
  trackerReport: any;
  trackerLastUpdated: any;
  indiaChart: any = {};
  indiaChartData: any[] = [];
  showIndiaChart = false;

  constructor(
    private indiaService: IndiaService,
    private router: Router,
    private decimalPipe: DecimalPipe
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
        let i = 0;
        this.trackerReport.forEach(el => {
          this.indiaChartData.push([
            el.state,
            { v: el.confirmed, f: this.decimalPipe.transform(el.confirmed, '.0') }
          ]);
          i++;
          if (i === this.indiaChartData.length) {
            this.loadIndiaMap(this.indiaChartData, ['State', 'Cases']);
          }
        });
      }
    });
  }

  viewDetails(state) {
    console.log(state, ' selected');
    this.router.navigate(['india/', state]);
  }

  loadIndiaMap(data, columnNames) {
    this.indiaChart.title = 'India Covid-19 Report';
    this.indiaChart.type = 'GeoChart';
    this.indiaChart.data = data;
    this.indiaChart.columnNames = columnNames;
    this.indiaChart.options = {
      domain: 'IN', // India
      region: 'IN', // India,
      displayMode: 'regions',
      resolution: 'provinces',
      // colors: [
      //   '#ffffff',
      //   // '#fbece6',
      //   '#f8d9ce',
      //   // '#f5c6b6',
      //   '#f2b49e',
      //   // '#efa186',
      //   '#ec8e6e',
      //   // '#e97c56',
      //   '#e6693e',
      //   // '#e35626',
      //   '#e0440e'
      // ],
      // colorAxis: {
      //   colors: [
      //     '#ffffff',
      //     // '#fbece6',
      //     '#f8d9ce',
      //     // '#f5c6b6',
      //     '#f2b49e',
      //     // '#efa186',
      //     '#ec8e6e',
      //     // '#e97c56',
      //     '#e6693e',
      //     // '#e35626',
      //     '#e0440e'
      //   ]
      // },
      colorAxis: { colors: ['#e7711c', '#4374e0'] }
      // backgroundColor: '#81d4fa',
      // is3D: true
    };
    this.showIndiaChart = true;
  }

}
