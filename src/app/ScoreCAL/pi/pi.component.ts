import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pi',
  imports: [],
   templateUrl:'./pi.html', 
  styleUrl:'./pi.css'
})
export class PiComponent  implements OnInit {
  startupName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the startup name from the route parameter
    this.startupName = this.route.snapshot.paramMap.get('startupName');
  }

}
