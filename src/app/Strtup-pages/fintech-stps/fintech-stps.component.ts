import { Component,inject,Injectable,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-fintech-stps',
  imports: [CommonModule, FormsModule],
  templateUrl:'./fintech-stps.html', 
  styleUrl:'./fintech-stps.css'
})
    
export class FintechStpsComponent implements OnInit{

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
      this.selectedStartups.push(startup);
    }
    this.showPopup = false;
  }

  removeStartup(startup: string): void {
    this.selectedStartups = this.selectedStartups.filter(
      (s) => s !== startup
    );
  }

  onSelectedStartupClick(startup: string): void {
    console.log(`You clicked on: ${startup}`);
    this.router.navigate(['fintech']);
  }
}
// admin: any;
// login: any;
// userRole: any;

// startups: any[] = [];
//   constructor(private authservice: AuthService,private router:Router) {}

//   async ngOnInit() {
//     try {
//       this.startups = await this.authservice.getStartups();
//     } catch (error) {
//       console.error('Error fetching startups:', error);
//     }
//   startups = ['Startup A', 'Startup B', 'Startup C', 'Startup D']; // List of startups
//   selectedStartups: string[] = []; // To store selected startups
//   showPopup = false; // To control the visibility of the popup
 

//   togglePopup(): void {
//     this.showPopup = !this.showPopup;
//   }

//   handleStartupClick(startup: string): void {
//     if (!this.selectedStartups.includes(startup)) {
//       this.selectedStartups.push(startup); // Add the selected startup
//     }
//     this.showPopup = false; // Close the popup after selection
//   }

//   removeStartup(startup: string): void {
//     this.selectedStartups = this.selectedStartups.filter(
//       (s) => s !== startup
//     ); // Remove the startup from the selected list
//   }

//   onSelectedStartupClick(startup: string): void {
//     console.log(`You clicked on: ${startup}`); // Log or perform additional actions when a selected startup is clicked
//     console.log('Navigating to fintech');
//   this.router.navigate(['fintech']);
//   }

//   }
// }
