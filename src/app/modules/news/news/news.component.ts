import { NewsService } from './../../../shared/services/news.service';
import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { NewsRss } from 'src/app/shared/models/news-rss';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  rssData: NewsRss;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getWhoNews();
  }

  getWhoNews() {
    this.newsService.getWhoNews().subscribe(res => {
      const parseString = xml2js.parseString;
      parseString(res, (err, result: NewsRss) => {
        this.rssData = result;
      });
    });
  }

}
