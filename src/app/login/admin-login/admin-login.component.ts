import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user-login',
  imports: [FormsModule, CommonModule],
   templateUrl:'./admin-login.html', 
  styleUrl:'./admin-login.css'
})
export class UserLoginComponent {

  eurekaid = '';
  password = '';
  message = '';
  messageColor = 'red';
  
  validCredentials = [
    { eurekaid: 'EU24269780', password: 'pass1' },
    { eurekaid: 'EU24269781', password: 'pass2' },
    { eurekaid: 'EU24269782', password: 'pass3' },
  ];

  constructor(private router: Router) {}
  validateLogin() {
  
    
    const user = this.validCredentials.find(
      (cred: { eurekaid: string; password: string; }) => cred.eurekaid === this.eurekaid && cred.password === this.password
    );

    if (user) {
      this.message = 'Login successful!';
      this.messageColor = 'green';
      setTimeout(() => {
        this.router.navigate(['/tracks']);
      }, 1000);
    } else {
      this.message = 'Invalid credentials. Please try again.';
      this.messageColor = 'red';
    }
  }
}






