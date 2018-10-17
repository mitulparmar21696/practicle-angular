import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  private isLogin:any ;

  isLoggedIn$: Observable<boolean>;
  msg$:Observable<string>
  subscription: Subscription;
  constructor(private _router: Router, private route:ActivatedRoute) {

  }
  ngOnInit() {  
  }
 
}
