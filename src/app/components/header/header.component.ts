import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nameProfile: string | null;
  public initial?: string | null;

  constructor(
    private router: Router
  ) {
    this.nameProfile = '';
    this.initial = '';
  }

  ngOnInit(): void {
    this.getName();
  }

  getName(): void {
    const name = localStorage.getItem('name');
    this.nameProfile = name;
    this.initial = name?.slice(0, 1);
    console.log(name);
  }

  logout(): void {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  dashboard(): void {
    this.router.navigate(['home/home-weather']);
  }

  userList(): void {
    this.router.navigate(['home/user-list']);
  }

}
