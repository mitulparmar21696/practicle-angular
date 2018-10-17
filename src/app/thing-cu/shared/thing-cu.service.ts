import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
@Injectable()
export class ThingCuService {
  readonly rootUrl = environment.WebAPIUrl;
  constructor(private http: HttpClient) { }
  
saveThing(data) {
    debugger
    return this.http.post(this.rootUrl + 'api/thing/save', data);
    }
  getThingById(id){
    debugger
    var data={
      id:id
    }
    return this.http.post(this.rootUrl + 'api/thing/get-thing-by-id', data);

  }
  updateThing(data){
    return this.http.post(this.rootUrl + 'api/thing/update-thing', data);

  }
  
}
