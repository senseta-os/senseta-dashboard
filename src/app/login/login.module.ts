import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginLayoutComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
