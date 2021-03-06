import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { HomeService } from 'src/app/shared/services/home.service';
import { IndiaService } from 'src/app/shared/services/india.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart: any = {};
  chartData: any[] = [];
  showChart = false;
  isDummyData = false;
  trackerSummary: any;

  constructor(
    private homeService: HomeService,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    this.getSummaryData();
  }

  loadWorldMap(data, columnNames) {
    this.chart.title = 'World Covid-19 Report';
    this.chart.type = 'GeoChart';
    this.chart.data = data;
    this.chart.columnNames = columnNames;
    this.chart.options = {
      colors: [
        '#ffffff',
        // '#fbece6',
        '#f8d9ce',
        // '#f5c6b6',
        '#f2b49e',
        // '#efa186',
        '#ec8e6e',
        // '#e97c56',
        '#e6693e',
        // '#e35626',
        '#e0440e'
      ],
      // backgroundColor: '#81d4fa',
      is3D: true
    };
    this.showChart = true;
  }

  getSummaryData() {
    this.homeService.getSummary().subscribe(res => {
      if (res && res.Global) {
        this.isDummyData = false;
        this.trackerSummary = res.Global;
        this.setChartData(res);
        // this.chartData.sort((a, b) => a.confirmed - b.confirmed).reverse();
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
        this.setChartData(res);
        // this.chartData.sort((a, b) => a.confirmed - b.confirmed).reverse();
      }
    });
  }

  setChartData(data) {
    let i = 0;
    data.Countries.forEach(f => {
      this.chartData.push([
        f.CountryCode,
        f.Country,
        {
          v: f.TotalConfirmed,
          f: this.decimalPipe.transform(f.TotalConfirmed, '.0').toString()
        }
      ]);
      i++;
      if (i === data.Countries.length) {
        this.loadWorldMap(this.chartData, ['Country Code', 'Country', 'Cases']);
      }
    });
  }

}
