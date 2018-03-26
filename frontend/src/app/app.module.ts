import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
   
  
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    PagesModule,
    AuthModule,
    BrowserModule,
    ClarityModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
