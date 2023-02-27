export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export type UserId = Pick<UserInfo, 'id'>;

export interface Post {
  userId: number;
  id: number | string;
  title: string;
  body: string;
}

export interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}
