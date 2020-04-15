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

  constructor(
    private indiaService: IndiaService,
    private route: ActivatedRoute
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
      }
    });
  }

}
