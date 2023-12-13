import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ContactService } from './contact.service';
import { Contact, UsersResponse } from '../contact.types';

describe('ContactService', () => {
  let service: ContactService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService],
    });

    service = TestBed.inject(ContactService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch contacts', () => {
    const users: Contact[] = [
      { firstName: 'John Doe', email: 'john.doe@example.com' },
      { firstName: 'Jane Doe', email: 'jane.doe@example.com' },
    ];
    const mockUsers = {
      total: 100,
      skip: 0,
      limit: 30,
      users: users
    }


    service.getContacts().subscribe((contacts) => {
      expect(contacts).toEqual(mockUsers);
    });

    const req = httpTestingController.expectOne('https://dummyjson.com/users');
    expect(req.request.method).toEqual('GET');

    req.flush(mockUsers);
  });
});
