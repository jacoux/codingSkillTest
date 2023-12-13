import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../contact.types';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  getContacts() {
    return this.httpClient.get<Users>("https://dummyjson.com/users");
  }
}
