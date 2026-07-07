import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'projects/:id', component: ProjectsComponent },
	{ path: 'experience', component: ExperienceComponent },
	{ path: 'experience/:id', component: ExperienceComponent },
	{ path: '**', redirectTo: 'home' }
];
