import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http:HttpClient) { }

// private userRole: string='';
get userRole(): string {
  return localStorage.getItem('userRole') || '';
}
get userid(): string {
  return localStorage.getItem('userid') || '';
}

private isLoggedIn: boolean = false;

 async getStartups(): Promise<any> {
  try {
    const startups = await lastValueFrom(this.http.get<any>('http://localhost:8000/api/startups/',{
      headers:{
        'Authorization': this.userid 
      }
    }) );
    console.log('Fetched startups:', startups); // Debugging
    return startups;
  } catch (error) {
    console.error('Error in getStartups:', error);
    return []; // Return an empty array on error
  }
}

async login(eurekaid: string,password: string):Promise<boolean>{
  
    const loginData = { eurekaid, password };
    try{
      const response = await lastValueFrom(this.http.post<any>('http://localhost:8000/api/login/', loginData));
      if(response.status ==='success'){
        // this.userRole = response.role;
        localStorage.setItem('userRole', this.userRole);
        localStorage.setItem('userid', eurekaid);
        
        this.isLoggedIn = true;
        return true;
    }
  // return this.http.post<any>('http://localhost:8000/api/login/', loginData).
  // if(eurekaid === 'JU24269780' && password === 'pass1'){
  //   this.userRole = 'jury';
  //   this.isLoggedIn = true;
  //   return true;
  // }
  // else if (eurekaid === 'EU24269780' && password === 'pass1'){
  //   this.userRole = 'admin-login';
  //   this.isLoggedIn = true;
  //   return true;
  // }
    return false;
  }catch(error){
    console.error('An error occurred during login:', error);
    return false;
  }
}

getUserRole(): string {
  return this.userRole;
}

isAuthenticated(): boolean {
  return this.isLoggedIn;
}

}
