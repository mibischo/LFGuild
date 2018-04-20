import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  test: Number;
  data: Observable<any[]>;
  
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
      this.data = this.characterService.getAll();
  }

  onDelete(character: any) {
    this.characterService.delete(character);
    this.data = this.characterService.getAll();
  }
    
  onChange(changes: any) {
      console.log(changes);
  }
}
