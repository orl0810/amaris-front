import { Component, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {MatTable} from '@angular/material/table';
import { UserElement } from '../../models/users';

const ELEMENT_DATA: UserElement[] = [];

@Component({
  selector: 'app-search',
  templateUrl: './serch.component.html',
  styleUrls: ['./serch.component.css']
})

export class SerchComponent {
  value = ''
  users: UserElement[] = []
  @ViewChild(MatTable) table!: MatTable<UserElement>;

  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_anual_salary', 'employee_age'];
   dataSource = [...ELEMENT_DATA];

  constructor(
    private usersService: UsersService
    ) {}


  searchUser(value: string) {
    if(value) {
      this.usersService.getUser(value)
      .subscribe((res: any) => {
        this.dataSource.push(res);
        this.table.renderRows();
      },
      (error) => {
        console.error('Something was wrong... ', error)
      })
    }
    else {
      this.usersService.getUsers()
      .subscribe((res: any) => {
        this.users = res
        this.users.forEach(element => {
          console.log("element: ", element)
          this.dataSource.push(element);
          this.table.renderRows();
        });
      },
      (error) => {
        console.error('Something was wrong... ', error)
      })
    }
  }
}
