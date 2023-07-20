import { Component, OnInit } from '@angular/core';
import experienceData from 'src/app/data/experience.data';
import projectsData from 'src/app/data/projects.data';
import Experience from 'src/app/models/experience.model';
import Project from 'src/app/models/project.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public recentExperience: Experience = experienceData[0];
	public featuredProject: Project = this.getFeaturedProject(0);
	
	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		// Grab all the section tags outside of the first
		const sectionsCollection = document.getElementsByTagName('section') as HTMLCollectionOf<HTMLElement>;
		const sections = Array.from(sectionsCollection);
		
		// Make them all fade in sequentially
		function fadeInSections(sections: any, index: number) {
			if (index >= sections.length) return;
			
			const section = sections[index];
			section.classList.add('slide-fade-in'); // Add the class to trigger the animation after a delay
			
			// Start the next animation 250ms after the current one starts
			setTimeout(() => fadeInSections(sections, index + 1), 250);
		}
		  
		fadeInSections(sections, 1); // Start the fading animation
	}

	// Finds a project by ID, if it doesn't exist, return the first project
	private getFeaturedProject(id: number): Project {
		const project = projectsData.find(project => project.id === id);
		return project ? project : projectsData[0];
	}
}