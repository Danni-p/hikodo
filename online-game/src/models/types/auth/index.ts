export interface AuthData {
  name?: string;
  email: string;
  password: string;
}

export interface UserCredentials {
  name: string;
  email: string;
  isNewUser: boolean;
  uid: string;
}
