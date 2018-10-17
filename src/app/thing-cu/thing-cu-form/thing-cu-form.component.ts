import { Component, OnInit } from '@angular/core';
import { ThingCuService } from '../shared/thing-cu.service'
import { from } from 'rxjs/observable/from';
import { Router ,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-thing-cu-form',
  templateUrl: './thing-cu-form.component.html',
  styleUrls: ['./thing-cu-form.component.css']
})
export class ThingCuFormComponent implements OnInit {
  thing:any;
  constructor(private service : ThingCuService , private router:Router,private active_route:ActivatedRoute) { 
    this.thing={}
  }

  ngOnInit() {
    var id = this.active_route.snapshot.params.id;
    if(id){
      this.getThingById(id)
    }
    debugger
  }
  getThingById(id){
    this.service.getThingById(id).subscribe((data: any) => {
      //console.log(data.data);
      this.thing=data.data
    }, (error) => {
      console.log(error);
    });
  }
  processForm(form){
    debugger
    
    if(this.thing._id ){
      this.service.updateThing(this.thing).subscribe((data: any) => {
        //console.log(data.data);
        this.router.navigate(['/home'])
      }, (error) => {
        console.log(error);
      });
    }else{
      this.service.saveThing(this.thing).subscribe((data: any) => {
        //console.log(data.data);
        this.router.navigate(['/home'])
      }, (error) => {
        console.log(error);
      });
    }
    
    
  }
  redirectBack(){
    this.router.navigate(['/home'])
  }
}