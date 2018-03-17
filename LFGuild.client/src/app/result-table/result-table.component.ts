import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { testdata } from './testdata';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  displayedColumns = ['name', 'server', 'ilvl', 'charlink', 'timestamp', 'race', 'class', 'battletag', 'languages', 'transfer', 'raidsPerWeek', 'specs', 'pveScore', 'mPlusScore'];

  @Input() dataSource: any[];

  constructor() { }

  ngOnInit() {
  }

}
