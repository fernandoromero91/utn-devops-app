import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users:any[] =[];
  constructor(private apiService: ApiService){}


  ngOnInit(): void {
    this.apiService.getUsers().subscribe(
      (data) => {
        this.users=data;
        console.log(this.users);
      },
      (error) => {
        console.log(this.users);
      }
    )
  }
  title = 'utn-devops-app';
}
