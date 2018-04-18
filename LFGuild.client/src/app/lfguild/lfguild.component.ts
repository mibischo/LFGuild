import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { LfguildService } from '../services/lfguild.service';
import { MatSlideToggleChange } from '@angular/material';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-lfguild',
  templateUrl: './lfguild.component.html',
  styleUrls: ['./lfguild.component.css']
})
export class LfguildComponent implements OnInit {

  languages = [
    { value: '', label: 'alle' },
    { value: 'de', label: 'Deutsch' },
    { value: 'en', label: 'Englisch' },
  ];

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

  minutes = [ 1, 3, 5, 10, 15, 20, 25, 30];

  optionsForm: FormGroup;
  data: Observable<any[]>;
  selectedReloadInterval: number = 5;
  reloadTimer: any;
  reloadChecked: boolean = false;
  lastUpdate: Date;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private lfgService: LfguildService, private characterService: CharacterService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    let group: any = {};

    group['language'] = new FormControl('de', Validators.required);
    group['raidsPerWeek'] = new FormControl(3, Validators.required);
    group['nrSites'] = new FormControl(1, Validators.required);
    group['orderBy'] = new FormControl('ts', Validators.required);

    this.optionsForm = new FormGroup(group);
  }

  startScan() {
    console.log("loading data");
    this.lastUpdate = new Date();
    this.isLoading = true;
    this.data = this.lfgService.get(this.optionsForm.value);
    this.data.subscribe(() => {
      this.isLoading = false;
    })
  }

  onReloadChange(change: MatSlideToggleChange) {
    if (change.checked) {
      console.log("reload scheduled")
      this.reloadTimer = setInterval(() => { 
        this.startScan();
      }, this.selectedReloadInterval * 60 * 1000); //this.selectedReloadInterval * 60 * 1000);
    } else {
      console.log("reload cancled")
      clearInterval(this.reloadTimer);
    }
  }

  onSave(character: any) {
    this.characterService.post(character);
  }

}
