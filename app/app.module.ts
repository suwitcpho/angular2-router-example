import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import {routers}         from './routingpage';
import { AppComponent }  from './app.component';
import {HomeComponent}   from './home.component';
import {Page1Component,Page1itemComponent}  from './page1.component';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    RouterModule.forRoot(routers)
   ],
  declarations: [ AppComponent,HomeComponent,Page1Component ,Page1itemComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
