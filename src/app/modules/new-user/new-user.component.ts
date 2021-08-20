import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  public newUser: FormGroup;

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private validator: DataService
  ) {


    const data_w = moment().format('DD-MM-YYYY');
    const time_l = moment().format('LT');

    this.newUser = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]{2,254}')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      password2: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      date: [data_w],
      time: [time_l]
    }, {
      validators: this.validator.passwordsIguales('password', 'password2')
    });
  }

  ngOnInit(): void {
  }


  login(): void {
    this.router.navigate(['login']);
  }

  addUser(): void {
    localStorage.setItem('name', this.newUser.controls.name.value);
    localStorage.setItem('user_data', JSON.stringify(this.newUser.value));
    this.router.navigate(['home/home-weather']);
  }

  get passwordNoValido() {
    return this.newUser.get('password')?.invalid && this.newUser.get('password')?.touched;
  }

  get password2NoValido() {
    const password = this.newUser.get('password')?.value;
    const password2 = this.newUser.get('password2')?.value;

    return (password === password2) ? false : true;
  }

}
