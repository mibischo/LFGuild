import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { testdata } from './testdata';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ClipboardService } from '../services/clipboard.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit, AfterViewInit, AfterContentInit {

  displayedColumns = ['faction', 'name', 'server', 'ilvl', 'specs', 'pveScore', 'mPlusScore', 'battletag', 'guild', 'charlink', 'raidsPerWeek', 'transfer', 'languages', 'timestamp', 'export', 'extraCol1', 'extraCol2'];
  _dataSource = new MatTableDataSource([]);
  data: any[];
  classes: string[];
  servers: string[];
  transfer: string[];
  specs: string[];
  ilvls: number[] = [ 950, 955, 960, 965, 970, 975, 980, 985, 990 ];

  selectedServers;
  selectedClasses;
  selectedTransfer;
  selectedSpecs;
  selectedIlvl;
  
  @ViewChild(MatSort) sort: MatSort;
  @ContentChild('extraColumn1') extraColumn1Tmpl: TemplateRef<any>;
  @ContentChild('extraColumn2') extraColumn2Tmpl: TemplateRef<any>;
  @ContentChild('extraColumn2') extraColumn3Tmpl: TemplateRef<any>;

  @Input('dataSource') set dataSource(value: any[]) {
    if (value) {
      this._dataSource = new MatTableDataSource(value);
      this.data = value;
      this._dataSource.sort = this.sort;
      this.classes = this.getClasses(value);
      this.servers = this.getServers(value);
      this.transfer = this.getTransfers(value);
      this.specs = this.getSpecs(value);

      this.onFilter();
    }
  };

  @Output() save = new EventEmitter();

  constructor(private clipboardService: ClipboardService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this._dataSource.sort = this.sort;    
  }

  ngAfterContentInit(): void {
  }

  hideExtraColumn1() {
    return this.extraColumn1Tmpl == undefined;
  }

  hideExtraColumn2() {
    return this.extraColumn2Tmpl == undefined;
  }

  hideExtraColumn3() {
    return this.extraColumn3Tmpl == undefined;
  }

  getClasses(result: any[]) {
    let res: string[] = new Array();

    result.forEach(r => {
      if (res.findIndex(e => e == r.clazz) == -1) {
        res.push(r.clazz);
      }
    });

    return res;
  }

  getServers(result: any[]) {
    let res: string[] = new Array();

    result.forEach(r => {
      if (res.findIndex(e => e == r.server) == -1) {
        res.push(r.server);
      }
    });

    return res;
  }

  getTransfers(result: any[]) {
    let res: string[] = new Array();

    result.forEach(r => {
      if (res.findIndex(e => e == r.transfer) == -1) {
        res.push(r.transfer);
      }
    });

    return res;
  }

  getSpecs(result: any[]) {
      console.log(result);
    let res: string[] = new Array();

    result.forEach(r => {
      let specs: string[] = r.specs.split(',');

      specs.forEach(element => {
        if (res.findIndex(r => r == element.trim()) == -1) {
          res.push(element.trim());
        }
      });      
    });

    return res;
  }

  copyToClipboard(row: any) {
    let text: string = '';

    text += row.name + ' ' + row.server + ' \n';
    text += row.clazz + ' ' + row.specs + ' \n';
    text += row.transfer + ' \n';
    text += 'Battletag: ' + row.battletag + ' \n';
    text += 'PvE Score: ' + row.pveScore + ' \n';
    text += 'M+ Score: ' + row.mPlusScore + ' \n';
    text += 'Gilde: https://www.wowprogress.com' + row.guildlink + ' \n';
    text += 'WowProgress: https://www.wowprogress.com' + row.charlink + ' \n';
    text += 'Logs: https://www.warcraftlogs.com' + row.charlink + ' \n';
    text += 'Armory: ' + row.armory + ' \n' ;

    this.clipboardService.copy(text);
  }

  onFilter() {
    let filtered = this.data;
    let remove = new Array();
    filtered.forEach(d => {
      if (this.selectedServers && this.selectedServers.length > 0) {
        let rem = true;

        this.selectedServers.forEach(s => {
          if (d.server == s) {
            rem = false;
          }
        });

        if (rem) {
          remove.push(d);
        }
      }

      if (this.selectedClasses && this.selectedClasses.length > 0) {
        let rem = true;

        this.selectedClasses.forEach(c => {
          if (d.clazz == c) {
            rem = false;
          }
        });

        if (rem) {
          remove.push(d);
        }
      }

      if (this.selectedTransfer && this.selectedTransfer.length > 0) {
        let rem = true;

        this.selectedTransfer.forEach(t => {
          if (d.transfer == t) {
            rem = false;
          }
        });

        if (rem) {
          remove.push(d);
        }
      }

      if (this.selectedSpecs && this.selectedSpecs.length > 0) {
        let rem = true;

        this.selectedSpecs.forEach(s => {
          if (d.specs.includes(s)) {
            rem = false;
          }
        });

        if (rem) {
          remove.push(d);
        }
      }

      if (this.selectedIlvl) {
        let rem = true;

        if (+d.ilvl > this.selectedIlvl) {
          rem = false;
        }

        if (rem) {
          remove.push(d);
        }
      }
    });

    remove.forEach(r => {
      filtered = filtered.filter(obj => obj != r);
    });

    this._dataSource = new MatTableDataSource(filtered);
    this._dataSource.sort = this.sort;
  }
}
