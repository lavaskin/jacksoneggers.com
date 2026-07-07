import { Component, Input, OnInit } from '@angular/core';
import Project from '../../models/project.model';
import { ChipComponent } from '../chip/chip.component';
import { ModalComponent } from '../modal/modal.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    imports: [ChipComponent, ModalComponent, RouterLink]
})
export class ProjectComponent {
	@Input() public project!: Project;
	@Input() public highlighted: boolean = false;
	@Input() public extraLink?: string;

	public showModal: boolean = false;
	public modalImage: number = 0;

	ngAfterViewInit(): void {
		if (this.highlighted) {	
			const element = document.getElementById(`p${this.project.id}`);
			if (element) element.scrollIntoView();
		}
	}

	public lastImage(): void {
		this.modalImage = this.modalImage === 0 ? this.project.images!.length - 1 : this.modalImage - 1;
	}
	public nextImage(): void {
		this.modalImage = this.modalImage === this.project.images!.length - 1 ? 0 : this.modalImage + 1;
	}
}
