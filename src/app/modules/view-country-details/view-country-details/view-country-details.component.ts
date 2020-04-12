import { CountryDetailsService } from './../../../shared/services/country-details.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-country-details',
  templateUrl: './view-country-details.component.html',
  styleUrls: ['./view-country-details.component.css']
})
export class ViewCountryDetailsComponent implements OnInit {
  countryDetails = [];
  isDummyData = false;
  detailPage = '';

  constructor(
    private countryDetailsService: CountryDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.getCountryDetails(slug);
  }

  getCountryDetails(slug) {
    this.countryDetailsService.getCountryDetails(slug).subscribe(res => {
      if (res) {
        this.isDummyData = false;
        if (slug === 'united-states') {
          this.groupResponseByDate(res);
        } else {
          this.countryDetails = res;
        }
        this.countryDetails.sort((a, b) => a.Date - b.Date).reverse();
        this.detailPage = this.countryDetails[0].Country;
      } else {
        this.getCountryDetailsDummy();
      }
    }, () => {
      this.getCountryDetailsDummy();
    }
    );
  }

  getCountryDetailsDummy() {
    this.countryDetailsService.getCountryDetailsDummy().subscribe(res => {
      if (res) {
        this.isDummyData = true;
        this.countryDetails = res;
        this.countryDetails.sort((a, b) => a.Date - b.Date).reverse();
        this.detailPage = this.countryDetails[0].Country;
        // console.log(this.countryDetails);
      }
    });
  }

  groupResponseByDate(res) {
    res.forEach(obj => {
      if (this.countryDetails.map(m => m.Date).indexOf(obj.Date) < 0) {
        this.countryDetails.push(obj);
      } else {
        this.countryDetails.forEach(el => {
          if (el.Date === obj.Date) {
            el.Confirmed = el.Confirmed + obj.Confirmed;
            el.Active = el.Active + obj.Active;
            el.Recovered = el.Recovered + obj.Recovered;
            el.Deaths = el.Deaths + obj.Deaths;
          }
        });
      }
    });
  }
}
