import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ens-stps',
  imports: [CommonModule, FormsModule],
  templateUrl:'./ens-stps.html', 
  styleUrl:'./ens-stps.css'
})
export class ENSStpsComponent {
  startups = ['Startup A', 'Startup B', 'Startup C', 'Startup D']; // List of startups
  selectedStartups: string[] = []; // To store selected startups
  showPopup = false; // To control the visibility of the popup

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
  }

}
