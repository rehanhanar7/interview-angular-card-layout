import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator/paginator';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
  styles: [
    `.main-div {
    margin-bottom: 1vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `,
  ],
})
export class CardOverviewExample {
  productsList: any[] = [];
  pagedList: any[] = [];
  length: number = 0;
  pageSize: number = 5; //displaying three cards each row
  pageSizeOptions: number[] = [5, 10, 20];

  ngOnInit() {
    // this.breakpoint = window.innerWidth <= 800 ? 1 : 3;
    this.productsList = [1, 2, 3, 4, 5, 6];
    this.pagedList = this.productsList.slice(0, 5);
    this.length = this.productsList.length;
  }

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  onResize(event) {
    //to adjust to screen size
    // this.breakpoint = event.target.innerWidth <= 800 ? 1 : 3;
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
