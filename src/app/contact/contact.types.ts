export interface Contact {
  firstName: string;
  email: string;
}
export interface UsersResponse {
  users: Contact[];
  total?: number;
  skip?: number;
  limit?: number;
}
