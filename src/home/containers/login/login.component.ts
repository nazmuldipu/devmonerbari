import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/home/user.model';
import { AuthService } from 'src/service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  showPassword = false;
  message = '';
  user: User;

  constructor(
    private builder: FormBuilder,
    public auth: AuthService,
    private activeRoute: ActivatedRoute
  ) {
    this.message = this.activeRoute.snapshot.queryParamMap.get('message') || '';
    this.user = new User();
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.loginForm = this.builder.group({
      // name: ['', Validators.required ],
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
    });
  }

  login() {
    if (this.loginForm.valid) {
      
    }
  }

  clear() {
    this.user = new User();
    this.createForm();
  }
}
