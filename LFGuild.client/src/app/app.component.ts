import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LfguildService } from './services/lfguild.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  raidsPerWeek = [
    { value: 0, label: 'egal'},
    { value: 1, label: '1 Raid/Woche'},
    { value: 2, label: '2 Raids/Woche'},
    { value: 3, label: '3 Raids/Woche'},
    { value: 4, label: '4 Raids/Woche'},
    { value: 5, label: '5 Raids/Woche'},
    { value: 6, label: '6 Raids/Woche'},
    { value: 7, label: '7 Raids/Woche'},
  ];

  nrSites = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ];

  optionsForm: FormGroup;
  data: Observable<any[]>;

  constructor(private fb: FormBuilder, private lfgService: LfguildService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    let group: any = {};

    group['raidsPerWeek'] = new FormControl(3, Validators.required);
    group['nrSites'] = new FormControl(1, Validators.required);
    group['orderBy'] = new FormControl('ts', Validators.required);

    this.optionsForm = new FormGroup(group);
  }

  startScan() {
    this.data = this.lfgService.get(this.optionsForm.value);
  }
}
