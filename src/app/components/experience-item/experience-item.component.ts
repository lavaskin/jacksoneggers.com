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
	@Input()
	public extraLink?: string;
	
	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		// Scroll to the element if it is highlighted
		if (this.highlighted) {	
			const element = document.getElementById(`e${this.experience.id}`);
			if (element) element.scrollIntoView();
		}
	}
}