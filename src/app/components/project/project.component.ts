import { Component, Input, OnInit } from '@angular/core';
import Project from 'src/app/models/project.model';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
	@Input()
	public project!: Project;
	@Input()
	public highlighted: boolean = false;
	@Input()
	public extraLink?: string;
	
	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		// Scroll to the element if it is highlighted
		if (this.highlighted) {	
			const element = document.getElementById(`p${this.project.id}`);
			if (element) element.scrollIntoView();
		}
	}
}