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

  post(character: any) {
    console.log('saving character');
    console.log(JSON.stringify(character));
    return this.http.post('/api/characters', JSON.stringify(character), this.options).subscribe();
  }

}
