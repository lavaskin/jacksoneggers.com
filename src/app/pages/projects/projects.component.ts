import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projectsData from '../../data/projects.data';
import { ProjectComponent } from '../../components/project/project.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    imports: [ProjectComponent]
})
export class ProjectsComponent implements OnInit {
	public projects = projectsData;
	
	private pidSubscription: any;
	public highlightedProject?: number;

	private _route = inject(ActivatedRoute);
	
	ngOnInit(): void {
		this.pidSubscription = this._route.paramMap.subscribe(params => {
			const pid = params.get('id');
			
			if (pid === null || isNaN(parseInt(pid))) return;

			this.highlightedProject = parseInt(pid);
			const element = document.getElementById(`p${pid}`);
			if (element !== null) element.scrollIntoView({behavior: 'smooth'});
		});
	}

	ngOnDestroy(): void {
		this.pidSubscription.unsubscribe();
	}
}
