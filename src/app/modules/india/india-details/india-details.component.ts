import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IndiaService } from 'src/app/shared/services/india.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india-details',
  templateUrl: './india-details.component.html',
  styleUrls: ['./india-details.component.css']
})
export class IndiaDetailsComponent implements OnInit {
  stateDetails = [];
  detailPage = '';
  stateChart: any = {};
  stateChartData: any[] = [];
  showStateChart = false;

  constructor(
    private indiaService: IndiaService,
    private route: ActivatedRoute,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    const state = this.route.snapshot.paramMap.get('state');
    this.getStateWiseConfirmed(state);
  }

  getStateWiseConfirmed(state) {
    this.indiaService.getStateWiseConfirmed().subscribe(res => {
      if (res) {
        const stateRes = res.filter(f => f.state === state);
        this.stateDetails = stateRes[0].districtData;
        this.stateDetails.sort((a, b) => a.confirmed - b.confirmed).reverse();
        this.detailPage = stateRes[0].state;
        this.setChartData(this.stateDetails);
      }
    });
  }

  setChartData(dataSet) {
    let i = 0;
    dataSet.forEach(el => {
      this.stateChartData.push([
        el.district,
        { v: el.confirmed, f: this.decimalPipe.transform(el.confirmed, '.0') }
      ]);
      i++;
      if (i === this.stateChartData.length) {
        this.loadStateMap(this.stateChartData, ['District', 'Cases']);
      }
    });
  }

  loadStateMap(data, columnNames) {
    this.stateChart.title = this.detailPage + ' Covid-19 Report';
    this.stateChart.type = 'PieChart';
    this.stateChart.data = data;
    this.stateChart.columnNames = columnNames;
    this.stateChart.options = {
      is3D: true,
      height: 320,
      chartArea: {
        width: '95%',
        height: '75%'
      },
      legend: {
        position: 'bottom'
      }
      // slices: [{ offset: 0.1 }]
    };
    this.showStateChart = true;
  }

}
