import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-fintech',
  imports: [FormsModule, CommonModule],
  templateUrl: './fintech.html',
  styleUrl: './fintech.css',
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
    'startup_idea',
    'target_market',
    'growth_potential',
    'revenue_model',
    'stage_of_startup',
  ];

  criteriaMap: Record<string, string> = {
    startup_idea: 'Startup Idea and USP',
    target_market: 'Target Market and Size',
    growth_potential: 'Growth Potential',
    revenue_model: 'Revenue Model',
    stage_of_startup: 'Stage of startup and future plans',
  };

  getHumanReadableCriteria(key: string): string {
    return this.criteriaMap[key] || key;
  }

  //
  startups: string[] = ['Startup A', 'Startup B', 'Startup C']; // Example startups
  selectedStartup: string = ''; // Currently selected startup

  // Data for all startups
  startupData: {
    scores: Record<string, number>;
    total: number;
    feedback: string;
    teamMembers: number;
  } = {
    scores: {},
    total: 0,
    feedback: '',
    teamMembers: 0,
  };

  // Current form fields
  showFeedbackError: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  // Method to select a startup and load its data
  selectStartup(startup: string) {
    // this.selectedStartup = startup;
    // const data = this.startupData[startup];

    // // Load data for the selected startup
    // this.scores = { ...data.scores };
    // this.total = data.total;
    // this.feedback = data.feedback;
    // this.pitchDeck = data.pitchDeck;
    // this.teamMembers = data.teamMembers;
    this.showFeedbackError = false;
  }

  // Method to calculate total (excluding team members)
  updateTotal() {
    let totalScore = 0;
    for (const field in this.startupData.scores) {
      totalScore += this.startupData.scores[field]; // Accumulate the score
    }
    // => sum + (score || 0), 0);

    this.startupData.total = totalScore; // Update total in startupData
  }
  async savetodatabase() {
    try {
      const data = this.startupData;

      const payload = {
        startup: this.selectedStartup,
        ...data.scores,
        total: data.total,
        feedback: data.feedback,
        team_members: data.teamMembers,
      };

      // Prepare the payload with the required data
      const observable = this.http.post(
        'http://localhost:8000/api/savescore/',
        payload
      );
      const response = await lastValueFrom(observable); // Convert the observable to a promise for async/await syntax
      alert('Scores saved successfully!');
      this.router.navigate(['/fintech-stps']);
    } catch (error) {
      console.error('Error saving scores:', error);
      alert('An error occurred. Please try again later.');
    }
  }

  // Save method to validate and save data
  save() {
    // Validate feedback
    console.log('this.feedback:', this.startupData.feedback);
    if (!this.startupData.feedback.trim()) {
      this.showFeedbackError = true;
      alert('Please provide feedback before saving.');
      return;
    }

    this.showFeedbackError = false;

    // Save data for the selected startup
    // this.startupData = {
    //   ...this.scores,
    //   total: this.total,
    //   feedback: this.feedback,
    //   teamMembers: this.teamMembers,
    // };

    this.savetodatabase();
    // Optional: Redirect to another page after saving
    // Replace '/next-page' with your actual route
  }
}
