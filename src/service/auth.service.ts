import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage = '';
  
  constructor() { }

  isAuthenticated(): boolean {
    return false;
  }

  clear() {}

  getUsername(){}
 
}
