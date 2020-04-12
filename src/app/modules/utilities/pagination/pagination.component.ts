import { ConfigService } from '../../../shared/services/base/config.service';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 2;
  @Input() pageSize = 5;
  // @Input() maxPages = 10;
  pager: any = {};

  constructor(private config: ConfigService) {
    this.initialPage = this.config.get('initialPage');
    this.pageSize = this.config.get('recordsPerPage');
  }

  ngOnInit(): void {
    // set page if items array isn't empty
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  setPage(page: number) {
    // get new pager object for specified page
    this.pager = this.paginate(this.items.length, page, this.pageSize);
    // get new page of items from items array
    const pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
    pageOfItems.forEach((f, i) => f.rowNumber = this.pager.startIndex + i + 1);

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
  }

  private paginate(totalRecords, currentPage, pageSize) {
    const totalPages = Math.ceil(totalRecords / pageSize);
    const maxPages = parseInt(this.config.get('maxVisiblePages'), 10);
    const fill = currentPage - 2;
    let pages = [];
    if (fill + maxPages <= totalPages) {
      pages = Array(maxPages).fill(fill)
        .map((x, i) => (x > 0) ? (x + i + 1) : (i + 1));
    } else {
      pages = Array(totalPages - fill).fill(fill)
        .map((x, i) => (x > 0) ? (x + i + 1) : (i + 1));
    }

    return {
      pages,
      currentPage,
      totalPages,
      startIndex: (currentPage - 1) * pageSize,
      endIndex: (currentPage * pageSize) - 1
    };
  }
}
