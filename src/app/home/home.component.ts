import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl:'./home.html', 
  styleUrl:'./home.css'
})
export class HomeComponent {
userRole: any;
  constructor(private router: Router, private srvice: ServicesService) {}

  ngOnInit(){
    this.srvice.getStartups();
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
}
}
