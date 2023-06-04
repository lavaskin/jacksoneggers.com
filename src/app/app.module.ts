import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { ProjectComponent } from './components/project/project.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ChipComponent } from './components/chip/chip.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProjectsComponent,
		ExperienceComponent,
		NavbarComponent,
		TitleCardComponent,
		ProjectComponent,
		ExperienceItemComponent,
  ChipComponent,
  ModalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }