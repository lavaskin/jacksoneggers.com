import { Component, Input, OnInit } from '@angular/core';
import Experience from 'src/app/models/experience.model';

@Component({
	selector: 'app-experience-item',
	templateUrl: './experience-item.component.html',
	styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
	@Input() 
	public experience!: Experience;
	@Input()
	public highlighted: boolean = false;
	
	constructor() { }

	ngOnInit(): void { }
}