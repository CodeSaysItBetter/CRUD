import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1, 'Dan', 'Lowe', 'dan@gmail.com')
  ];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    return this._userService.getUsers().then(users => {
      return this.users = users;
    });
  }

  create(user: User) {
    this.users.push(user);
  }

  destroy(user: User) {
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

  update(users: any) {
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }
}
