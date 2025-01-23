import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

  

export const routes: Routes = [
  {
      path:'',
      pathMatch:'full',
      loadComponent: () => {
          return import('./home/home.component').then((m) => m.HomeComponent)
      },
  },
  {
      path: 'login',
      loadComponent: () => {
          return import('./login/login.component').then((m) => m.LoginComponent)
      }
  },
  {
    path: 'tracks',
    loadComponent: () => {
        return import('./tracks/tracks.component').then((m) => m.TracksComponent)
    }
},
{
  path: 'startups',
  loadComponent: () => {
      return import('./startups/startups.component').then((m) => m.StartupsComponent)
  }
},

];
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

