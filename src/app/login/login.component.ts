import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
//import { LoginRequest } from '../models/loginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userName = 'admin';
    this.password = 'peerVue';
  }

  onLogin(){
    this.loginService.login({userName: this.userName, password: this.password})
      .subscribe(x=>alert(JSON.stringify(x)));
  }

  test(){
    this.loginService.test().subscribe(x=>alert(JSON.stringify(x)));
  }
}
