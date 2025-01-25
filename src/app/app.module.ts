import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Example route
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
