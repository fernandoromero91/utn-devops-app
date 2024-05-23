import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: any[] = [];
  constructor(private UserService: UsersService){

  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.UserService.getUsers().subscribe({
      next: (result) => {
        this.users = result;
        console.log(this.users);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
