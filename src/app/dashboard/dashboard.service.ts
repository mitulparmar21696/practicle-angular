import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
@Injectable()
export class DashboardService {
  readonly rootUrl = environment.WebAPIUrl;
  constructor(private http: HttpClient) { }
  
  getAll() {
    debugger
    return this.http.post(this.rootUrl + 'api/thing/get-all', {});
    
    }
  search(txt) {
    debugger
    return this.http.post(this.rootUrl + 'api/thing/search', txt);
    
    }
    delete(txt) {
      debugger
      return this.http.post(this.rootUrl + 'api/thing/delete', txt);
      
      }
}

