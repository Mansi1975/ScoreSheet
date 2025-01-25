import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
 
  templateUrl:'./login.html', 
  styleUrl:'./login.css'
})
export class LoginComponent {
 
  eurekaid = '';
  password = '';
  message = '';
  messageColor = 'red';

  validCredentials = [
    { eurekaid: 'user1', password: 'pass1' },
    { eurekaid: 'user2', password: 'pass2' },
    { eurekaid: 'user3', password: 'pass3' },
  ];

  validateLogin() {
    const user = this.validCredentials.find(
      (cred) => cred.eurekaid === this.eurekaid && cred.password === this.password
    );

    if (user) {
      this.message = 'Login successful!';
      this.messageColor = 'green';
    } else {
      this.message = 'Invalid credentials. Please try again.';
      this.messageColor = 'red';
    }
  }
}






