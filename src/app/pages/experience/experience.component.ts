import { Component, OnInit } from '@angular/core';
import experiencesData from 'src/app/data/experience.data';

@Component({
	selector: 'app-experience-page',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
	public experiences = experiencesData;
	
	constructor() { }

	ngOnInit(): void { }
}