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

	public showModal: boolean = false;
	public modalImage: number = 0; // Index of the image to show in the modal
	
	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		// Scroll to the element if it is highlighted
		if (this.highlighted) {	
			const element = document.getElementById(`p${this.project.id}`);
			if (element) element.scrollIntoView();
		}
	}

	lastImage(): void {
		this.modalImage = this.modalImage === 0 ? this.project.images!.length - 1 : this.modalImage - 1;
	}
	nextImage(): void {
		this.modalImage = this.modalImage === this.project.images!.length - 1 ? 0 : this.modalImage + 1;
	}
}