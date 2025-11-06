export interface User {
  phone: string;
  username: string;
  avatar: string;
}

export interface AuthSuccessData {
  token: string;
  user: User;
}

export interface AuthConflictData {
  phone: string;
  username: string;
  avatar: string;
}

export interface RegisterPayload {
  phone: string;
  password?: string;
  confirmPassword?: string;
}

export interface LoginPayload {
  phone: string;
  password: string;
}
