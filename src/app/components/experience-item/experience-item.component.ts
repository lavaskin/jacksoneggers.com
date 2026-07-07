import { Component, Input, OnInit } from '@angular/core';
import Experience from '../../models/experience.model';
import projectsData from '../../data/projects.data';
import { ChipComponent } from '../chip/chip.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.css'],
    imports: [ChipComponent, RouterLink]
})
export class ExperienceItemComponent {
	@Input() public experience!: Experience;
	@Input() public highlighted: boolean = false;
	@Input() public extraLink?: string;

	ngAfterViewInit(): void {
		if (this.highlighted) {	
			const element = document.getElementById(`e${this.experience.id}`);
			if (element) element.scrollIntoView();
		}
	}

	public getProjectNameFromID(id: number): string {
		return projectsData.find(p => p.id === id)?.title ?? 'Unknown Project';
	}

}
