import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TermsComponent } from './policy/terms/terms.component';
import { PrivacyComponent } from './policy/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component:ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: NavbarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'terms', component: TermsComponent},
  { path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
