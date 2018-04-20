import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  data: Observable<any[]>;
  
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
      this.data = this.characterService.getAll();
  }

}
