import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersResponse } from '../contact.types';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  getContacts() {
    return this.httpClient.get<UsersResponse>('https://dummyjson.com/users');
  }
}
