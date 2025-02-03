import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { ProtectComponent } from './protect/protect.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'Home', component: HeroComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Protect', component: ProtectComponent },
  { path: 'Symptomes', component: SymptomsComponent },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
