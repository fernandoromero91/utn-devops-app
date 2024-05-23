import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'http://localhost:3000/api'; 
  constructor(private httpCliente: HttpClient) { }

  getUsers(): Observable<any>{
    return this.httpCliente.get(`${this.apiUrl}/users`).pipe(res =>res);
  }

}
