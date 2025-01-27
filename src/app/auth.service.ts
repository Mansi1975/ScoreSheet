import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

private userRole: string='';
private isLoggedIn: boolean = false;

login(eurekaid: string,password: string): boolean{
  if(eurekaid === 'JU24269780' && password === 'pass1'){
    this.userRole = 'jury';
    this.isLoggedIn = true;
    return true;
  }
  else if (eurekaid === 'EU24269780' && password === 'pass1'){
    this.userRole = 'admin-login';
    this.isLoggedIn = true;
    return true;
  }
  return false;
}

getUserRole(): string {
  return this.userRole;
}

isAuthenticated(): boolean {
  return this.isLoggedIn;
}

}
