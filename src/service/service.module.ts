import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';



@NgModule({
  providers: [
    AuthService
  ]
})
export class ServiceModule { }
