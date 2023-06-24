import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUser(id: string) {
    return this.http.get(`${environment.backend}/${id}`)
  }

  getUsers() {
    return this.http.get(`${environment.backend}s`)
  }

  constructor(
    private http: HttpClient,
  ) { }
}
