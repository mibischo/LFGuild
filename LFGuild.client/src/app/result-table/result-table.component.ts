import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { testdata } from './testdata';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['name', 'server', 'ilvl', 'charlink', 'timestamp', 'race', 'class', 'battletag', 'languages', 'transfer', 'raidsPerWeek', 'specs', 'pveScore', 'mPlusScore'];
  _dataSource = new MatTableDataSource([]);
  
  @ViewChild(MatSort) sort: MatSort;

  @Input('dataSource') set dataSource(value: any[]) {
    if (value) {
      this._dataSource = new MatTableDataSource(value);
      this._dataSource.sort = this.sort;
    }
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._dataSource.sort = this.sort;
  }
}
