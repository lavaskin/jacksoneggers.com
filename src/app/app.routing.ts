import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ExperienceComponent } from "./pages/experience/experience.component";

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'experience', component: ExperienceComponent},
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }