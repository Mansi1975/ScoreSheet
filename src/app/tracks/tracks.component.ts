import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracks',
  imports: [],
  templateUrl:'./tracks.html', 
  styleUrl:'./tracks.css'
})
export class TracksComponent {
  constructor(private router: Router) {}
  

  navigateToF(): void {
    console.log('Navigating to fintech-stps');
    this.router.navigate(['fintech-stps']);
}
  navigateToH(): void {
    console.log('Navigating to health-stps');
  this.router.navigate(['health-stps']);
} 
navigateToLS(): void {
  console.log('Navigating to lgsc-stps');
  this.router.navigate(['lgsc-stps']);
}
navigateToES(): void {
  console.log('Navigating to ens-stps');
  this.router.navigate(['ens-stps']);
}
navigateToP(): void {
  console.log('Navigating to paniit-stps');
  this.router.navigate(['paniit-stps']);
}
navigateToS(): void {
  console.log('Navigating to socials-stps');
  this.router.navigate(['socials-stps']);
}
navigateToB(): void {
  console.log('Navigating to business-stps');
  this.router.navigate(['business-stps']);
}

}
