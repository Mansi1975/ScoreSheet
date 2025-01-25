import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-healthcare',
  imports: [],
  templateUrl:'./healthcare.html', 
  styleUrl:'./healthcare.css'
})
export class HealthcareComponent {
startupName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the startup name from the route parameter
    this.startupName = this.route.snapshot.paramMap.get('startupName');
  }
}
