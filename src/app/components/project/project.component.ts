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
	
	constructor() { }

	ngOnInit(): void { }
}