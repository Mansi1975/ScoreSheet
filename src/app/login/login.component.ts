import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
   imports: [FormsModule, CommonModule],
  templateUrl:'./login.html', 
  styleUrl:'./login.css'
})
export class LoginComponent {

  // eurekaid = '';
  // password = '';
  // message = '';
  // messageColor = 'red';
  
  // validCredentials = [
  //   { eurekaid: 'EU24269780', password: 'pass1' },
  //   { eurekaid: 'EU24269781', password: 'pass2' },
  //   { eurekaid: 'EU24269782', password: 'pass3' },
  // //   { eurekaid: 'JU24269780', password: 'pass1' },
  // //  { eurekaid: 'JU24269781', password: 'pass2' },
  // //  { eurekaid: 'JU24269782', password: 'pass3' },
  // ];

  // constructor(private router: Router) {}
  // validateLogin() {
  
    
  //   const user = this.validCredentials.find(
  //     (cred: { eurekaid: string; password: string; }) => cred.eurekaid === this.eurekaid && cred.password === this.password
  //   );

  //   if (user) {
  //     this.message = 'Login successful!';
  //     this.messageColor = 'green';
  //     setTimeout(() => {
  //       this.router.navigate(['/tracks']);
  //     }, 1000);
  //   } else {
  //     this.message = 'Invalid credentials. Please try again.';
  //     this.messageColor = 'red';
  //   }
  // }

 eurekaid = '';
  password = '';
  message = '';
  messageColor = 'red';
  errorMessage: string='';
  
  // validCredentials = [
  //   { eurekaid: 'JU24269780', password: 'pass1' },
  //   { eurekaid: 'JU24269781', password: 'pass2' },
  //   { eurekaid: 'JU24269782', password: 'pass3' },
  // ];

  constructor(private authService: AuthService,private router: Router) {}
  // validateLogin() {
  
    
  //   const user = this.validCredentials.find(
  //     (cred: { eurekaid: string; password: string; }) => cred.eurekaid === this.eurekaid && cred.password === this.password
  //   );

  //   if (user) {
  //     this.message = 'Login successful!';
  //     this.messageColor = 'green';
  //     setTimeout(() => {
  //       this.router.navigate(['/tracks']);
  //     }, 1000);
  //   } else {
  //     this.message = 'Invalid credentials. Please try again.';
  //     this.messageColor = 'red';
  //   }
  // }

  login() {
    if (this.authService.login(this.eurekaid, this.password)) {
      const role = this.authService.getUserRole();
      if (role === 'jury') {
        this.router.navigate(['/fintech-jury']); // Navigate to user1's page
      } else if (role === 'admin-login') {
        this.router.navigate(['/fintech-stps']); // Navigate to user2's page
      }
    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }



}






