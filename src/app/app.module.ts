import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TracksComponent } from './tracks/tracks.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FintechStpsComponent } from './Strtup-pages/fintech-stps/fintech-stps.component';

import { HealthStpsComponent } from './Strtup-pages/health-stps/health-stps.component';
import { LGSCStpsComponent } from './Strtup-pages/lgsc-stps/lgsc-stps.component';
import { PaniitStpsComponent } from './Strtup-pages/paniit-stps/paniit-stps.component';
import { SocialsStpsComponent } from './Strtup-pages/socials-stps/socials-stps.component';
import { ENSStpsComponent } from './Strtup-pages/ens-stps/ens-stps.component';
import { BusinessStpsComponent } from './Strtup-pages/business-stps/business-stps.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tracks', component: TracksComponent},
  
    
      { path: 'fintech-stps', component: FintechStpsComponent }, 
      { path: 'health-stps', component: HealthStpsComponent },
      { path: 'lgsc-stps', component: LGSCStpsComponent },
      { path: 'paniit-stps', component: PaniitStpsComponent },
      { path: 'socials-stps', component: SocialsStpsComponent },
      { path: 'ens-stps', component: ENSStpsComponent },
      { path: 'business-stps', component: BusinessStpsComponent },
    
  
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }, // Wildcard route for undefined paths
];

@NgModule({
  declarations: [
    
    
  ],
  
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
