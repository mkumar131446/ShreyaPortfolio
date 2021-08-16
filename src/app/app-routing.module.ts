import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactmeComponent } from './contactme/contactme.component';
// import { LinkendinComponent } from './linkendin/linkendin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


const routes: Routes = [
  {path: '', component: LandingpageComponent, pathMatch: 'full'},
  {path: 'aboutme', component: AboutmeComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactmeComponent }
  // { path: 'linkedin', component: LinkendinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
