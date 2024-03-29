export interface UserData {
  name: string;
  password: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
}
