import { Component, OnInit } from '@angular/core';
import experienceData from 'src/app/data/experience.data';
import Experience from 'src/app/models/experience.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public recentExperience: Experience = experienceData[0];
	
	constructor() { }

	ngOnInit(): void { }
}