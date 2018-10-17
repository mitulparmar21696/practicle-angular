import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DashboardService} from './dashboard.service'
import * as $ from 'jquery';
declare var jQuery: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading:any;
  things:any;
  search:any;
  private cols: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
    { field: 'usage', header: 'Usage' }
  ];
  constructor(private _router: Router,private _ttService: DashboardService) { 
    this.loading=false;
    this.things=[];
    this.search=''
  }

  ngOnInit() {
   this.getThings();
  }

  getThings() {
    this._ttService.getAll().subscribe((data: any) => {
      //console.log(data.data);
      this.things=data.data;
      this.loading=false;
    }, (error) => {
      this.loading=false;
      console.log(error);
    });
  }
  searchThing(){
    var txt=jQuery('#search').val();
    debugger
    if(txt==""){
      this.getThings();
    }else{
      var search={
        text:txt
      }
      this._ttService.search(search).subscribe((data: any) => {
        //console.log(data.data);
        this.things=data.data;
        this.loading=false;
      }, (error) => {
        this.loading=false;
        console.log(error);
      });
    }

  }
  addThing(){
    this._router.navigate(['/thing/form'])
  }
  UpdateThing(data){
    debugger
    this._router.navigate(['/thing/form', data._id]);
  }
  deleteThing(data){
    var dt={id:data._id}
    this._ttService.delete(dt).subscribe((data: any) => {
      //console.log(data.data);
      this.getThings();
    }, (error) => {
      console.log(error);
    });
  }
}
