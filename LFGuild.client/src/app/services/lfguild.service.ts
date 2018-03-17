import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class LfguildService {

  constructor(private http: Http) { }

  get(options: any): Observable<any[]> {
    return this.http.get('/api/getlfg?raidsPerWeek=' + options.raidsPerWeek + '&nrSites=' + options.nrSites + '&orderBy=' + options.orderBy).map(res => res.json());
  }

}
