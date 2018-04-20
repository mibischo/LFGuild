import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class CharacterService {
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAll() {
      return this.http.get('/api/characters').map(res => res.json());
  }

  post(character: any) {
    console.log('saving character');
    return this.http.post('/api/characters', JSON.stringify(character), this.options).subscribe();
  }

  delete(character: any) {
    console.log('deleting character');
    return this.http.delete('/api/characters/' + character.hash).subscribe();
  }
}
