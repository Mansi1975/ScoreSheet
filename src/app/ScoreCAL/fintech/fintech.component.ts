import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-fintech',
  imports: [FormsModule,CommonModule],
  templateUrl:'./fintech.html', 
  styleUrl:'./fintech.css'
})
export class FintechComponent implements OnInit {
//   startupName: string | null = null;
// feedback: any;
// showFeedbackError: any;
// total: any;
// teamMembers: any;
// scores: any;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     // Get the startup name from the route parameter
//     this.startupName = this.route.snapshot.paramMap.get('startupName');
//   }

criteria: string[] = [
  'Startup Idea and USP',
  'Target Market and Size',
  'Growth Potential',
  'Revenue Model',
  'Stage of startup and future plans',
];

// 
startups: string[] = ['Startup A', 'Startup B', 'Startup C']; // Example startups
  selectedStartup: string = ''; // Currently selected startup

  // Data for all startups
  startupData: Record<
    string,
    {
      scores: number[];
      total: number;
      feedback: string;
      pitchDeck: string;
      teamMembers: number;
    }
  > = {};

  // Current form fields
  scores: number[] = [];
  total: number = 0;
  feedback: string = '';
  pitchDeck: string = '';
  teamMembers: number = 0;
  showFeedbackError: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize data for all startups
    this.startups.forEach((startup) => {
      this.startupData[startup] = {
        scores: new Array(this.criteria.length).fill(0),
        total: 0,
        feedback: '',
        pitchDeck: '',
        teamMembers: 0,
      };
    });
  }

  // Method to select a startup and load its data
  selectStartup(startup: string) {
    this.selectedStartup = startup;
    const data = this.startupData[startup];

    // Load data for the selected startup
    this.scores = [...data.scores];
    this.total = data.total;
    this.feedback = data.feedback;
    this.pitchDeck = data.pitchDeck;
    this.teamMembers = data.teamMembers;
    this.showFeedbackError = false;
  }

  // Method to calculate total (excluding team members)
  updateTotal() {
    this.total = this.scores.reduce((sum, score) => sum + (score || 0), 0);
    if (this.selectedStartup) {
      this.startupData[this.selectedStartup].total = this.total; // Update total in startupData
    }
  }

  // Save method to validate and save data
  save() {
    // Validate feedback
    if (!this.feedback.trim()) {
      this.showFeedbackError = true;
      alert('Please provide feedback before saving.');
      return;
    }

    this.showFeedbackError = false;

    // Save data for the selected startup
    if (this.selectedStartup) {
      this.startupData[this.selectedStartup] = {
        scores: [...this.scores],
        total: this.total,
        feedback: this.feedback,
        pitchDeck: this.pitchDeck,
        teamMembers: this.teamMembers,
      };

      console.log(`Saved data for ${this.selectedStartup}:`, this.startupData[this.selectedStartup]);
      alert(`Data for ${this.selectedStartup} has been saved!`);
    }

    // Optional: Redirect to another page after saving
    this.router.navigate(['/fintech-stps']); // Replace '/next-page' with your actual route
  }

}
