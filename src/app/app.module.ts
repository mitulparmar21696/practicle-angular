import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import {ThingCuModule} from './thing-cu/thing-cu.module'
import * as $ from 'jquery';


// import 'datatables.net';
//import { DataTableModule } from 'angular5-data-table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    ThingCuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
