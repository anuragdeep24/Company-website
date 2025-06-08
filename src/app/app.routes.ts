import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

import { OurWorksComponent } from './components/our-works/our-works.component';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-works', component: OurWorksComponent },
  { path: 'contact', component: ContactComponent},
   { path: 'footer', component: FooterComponent },
   {path: 'our-team',component:OurTeamComponent},
   {path:'about-us',component:AboutUsComponent}
];
