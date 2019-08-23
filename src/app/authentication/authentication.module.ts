import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// import { P404Component } from '';
import { AuthenticationComponent } from './authentication.component';

// import { ChangePasswordComponent } from '';
// import { ForgotPasswordComponent } from '';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  declarations: [
  LoginComponent,
  SignupComponent,
  AuthenticationComponent,

  ],
  providers: [
   
  ]
})
export class AuthenticationModule { }