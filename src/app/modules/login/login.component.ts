import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private router: Router
  ) {

    const data_w = moment().format('DD-MM-YYYY');
    const time_l =  moment().format('LT');
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.min(5)]),
      name: new FormControl('Jovani Ramirez'),
      date: new FormControl(data_w),
      time: new FormControl(time_l)
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(['home/home-weather']);
    localStorage.setItem('name', 'Jovani Ramirez');
    localStorage.setItem('user_data', JSON.stringify(this.formGroup.value));
  }

  newUser(): void {
    this.router.navigate(['new-user']);
  }

}
