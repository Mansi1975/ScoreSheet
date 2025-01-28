import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-health-stps',
  imports: [CommonModule, FormsModule],
  templateUrl:'./health-stps.html', 
  styleUrl:'./health-stps.css'
})
export class HealthStpsComponent implements OnInit{
  // constructor(private router: Router) {}
  // startups = ['Startup A', 'Startup B', 'Startup C', 'Startup D']; // List of startups
  // selectedStartups: string[] = []; // To store selected startups
  // showPopup = false; // To control the visibility of the popup

  startups: string[] = [];
  selectedStartups: string[] = [];
  showPopup = false;

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    try {
      this.startups = await this.authService.getStartups();
      console.log('Startups loaded in component:', this.startups); // Debugging
    } catch (error) {
        console.error('Error in Oninit:', error);
      }
    }
  

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  handleStartupClick(startup: string): void {
    if (!this.selectedStartups.includes(startup)) {
      this.selectedStartups.push(startup); // Add the selected startup
    }
    this.showPopup = false; // Close the popup after selection
  }

  removeStartup(startup: string): void {
    this.selectedStartups = this.selectedStartups.filter(
      (s) => s !== startup
    ); // Remove the startup from the selected list
  }

  onSelectedStartupClick(startup: string): void {
    console.log(`You clicked on: ${startup}`); // Log or perform additional actions when a selected startup is clicked
    console.log('Navigating to healthcare');
    this.router.navigate(['healthcare']);
  
  }

}
