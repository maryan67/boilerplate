import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppInMemoryUserModule } from './app-in-memory-api/app-in-memory-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserService } from './user-service.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




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
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppInMemoryUserModule, {passThruUnknownUrl: true, delay: 500, rootPath: 'api'}),
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
