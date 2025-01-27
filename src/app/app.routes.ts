import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TracksComponent } from './tracks/tracks.component';
import { NgModule } from '@angular/core';
import { FintechStpsComponent } from './Strtup-pages/fintech-stps/fintech-stps.component';

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
  path: 'fintech-stps', component: FintechStpsComponent},
    // loadComponent: () => import('./Strtup-pages/fintech-stps/fintech-stps.component').then((m) => m.FintechStpsComponent),
  {path:'**', redirectTo:'finetech-stps'},
  
{
  path: 'health-stps',
    loadComponent: () => import('./Strtup-pages/health-stps/health-stps.component').then((m) => m.HealthStpsComponent),
},
{
  path: 'lgsc-stps',
    loadComponent: () => import('./Strtup-pages/lgsc-stps/lgsc-stps.component').then((m) => m.LGSCStpsComponent),
},
{
  path: 'ens-stps',
    loadComponent: () => import('./Strtup-pages/ens-stps/ens-stps.component').then((m) => m.ENSStpsComponent),
},
{
  path: 'paniit-stps',
    loadComponent: () => import('./Strtup-pages/paniit-stps/paniit-stps.component').then((m) => m.PaniitStpsComponent),
},
{
  path: 'socials-stps',
    loadComponent: () => import('./Strtup-pages/socials-stps/socials-stps.component').then((m) => m.SocialsStpsComponent),
},
{
  path: 'business-stps',
    loadComponent: () => import('./Strtup-pages/business-stps/business-stps.component').then((m) => m.BusinessStpsComponent),
},


{
    path: 'scoresheet',
    loadComponent: () => {
        return import('./scoresheet/scoresheet.component').then((m) => m.ScoresheetComponent)
    }
  },

  {
    path: 'fintech',
      loadComponent: () => import('./ScoreCAL/fintech/fintech.component').then((m) => m.FintechComponent),
  },
  {
    path: 'healthcare',
      loadComponent: () => import('./ScoreCAL/healthcare/healthcare.component').then((m) => m.HealthcareComponent),
  },
  {
    path: 'bussi',
      loadComponent: () => import('./ScoreCAL/bussi/bussi.component').then((m) => m.BussiComponent),
  },
  {
    path: 'es',
      loadComponent: () => import('./ScoreCAL/es/es.component').then((m) => m.EsComponent),
  },
  {
    path: 'lsc',
      loadComponent: () => import('./ScoreCAL/lsc/lsc.component').then((m) => m.LscComponent),
  },
  {
    path: 'pi',
      loadComponent: () => import('./ScoreCAL/pi/pi.component').then((m) => m.PiComponent),
  },
  {
    path: 'soc',
      loadComponent: () => import('./ScoreCAL/soc/soc.component').then((m) => m.SocComponent),
  },

  {
    path: 'fintech-jury',
      loadComponent: () => import('./Jury_stpspage/fintech-jury/fintech-jury.component').then((m) => m.FintechJuryComponent),
  },
  
  


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}


