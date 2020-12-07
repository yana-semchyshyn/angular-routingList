import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  users: Array<any> = [];
  userLogin: string;
  userPassword: string;
  userEmail: string;
  editIndex: number;
  isEdited = true;
  constructor() { }

  ngOnInit(): void {
  }
  addUser(): void {
    if (this.userLogin != '' && this.userPassword != '' && this.userEmail != '') {
      const user = {
        login: this.userLogin,
        password: this.userPassword,
        email: this.userEmail,
      };
      this.users.push(user);
      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';
    }
  }
  deleteUser(index: number): void{
    this.users.splice(index, 1);
  }
  editUser(index: number): void{
    this.userLogin = this.users[index].login;
    this.userPassword = this.users[index].password;
    this.userEmail = this.users[index].email;
    this.editIndex = index;
    this.isEdited = false;
  }
  saveEditUser(): void{
    this.users[this.editIndex].login = this.userLogin;
    this.users[this.editIndex].password = this.userPassword;
    this.users[this.editIndex].email = this.userEmail;
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
    this.editIndex = null;
    this.isEdited = true;
  }
}