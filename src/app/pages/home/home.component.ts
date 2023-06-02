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
	public featuredProject: Project = projectsData[0];
	
	constructor() { }

	ngOnInit(): void { }
}