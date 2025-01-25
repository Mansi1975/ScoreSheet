import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { TracksComponent } from './tracks/tracks.component';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `
    <main>
    <!-- <app-home/>
    <app-login/> -->

    <router-outlet/>
    </main>
  `,
  styles: [`
    main{
      width: 100vw;
      padding:16px;
      border: 3px solid blue;
      border-radius: 49px;
      
      background-color: #F0F4F8;
      height: 100vh; /* Ensure it covers the full viewport */
      margin: 0;
      

    }
    `],
})
export class AppComponent {
  title = 'ScoreSheet';
}
