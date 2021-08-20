import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public data_user: any[];
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<any[]>;
  public dta_usr: any[];

  public name: string;
  public email: string;
  public date: string;
  public time: string;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {

    this.name = '';
    this.email = '';
    this.date = '';
    this.time = '';

    this.displayedColumns = ['name', 'email', 'data_r', 'last_login'];
    this.dta_usr = [];
    this.dataSource = new MatTableDataSource();

    this.data_user = [];
    this.getUser();
   }

  ngOnInit(): void {
  }


  getUser(): void {
    const d_user = JSON.parse(localStorage.getItem('user_data')|| '{}');
    console.log(d_user);

    this.name = d_user.name;
    this.email = d_user.email;
    this.date = d_user.date;
    this.time = d_user.time;
    
    this.dataSource = new MatTableDataSource(d_user);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
 
}
