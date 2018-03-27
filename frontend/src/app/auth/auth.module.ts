import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
