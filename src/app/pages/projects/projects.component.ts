import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projectsData from 'src/app/data/projets.data';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	public projects = projectsData;
	
	private pidSubscribtion: any;
	public highlightedProject?: number;
	
	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		// Grab the id from the url
		this.pidSubscribtion = this.route.paramMap.subscribe(params => {
			const pid = params.get('id');
			
			if (pid === null || isNaN(parseInt(pid))) return;

			// If not, set the active experience
			this.highlightedProject = parseInt(pid);
			// And scroll to it
			const element = document.getElementById(`p${pid}`);
			if (element !== null) element.scrollIntoView({behavior: 'smooth'});
		});
	}

	ngOnDestroy(): void {
		this.pidSubscribtion.unsubscribe();
	}
}