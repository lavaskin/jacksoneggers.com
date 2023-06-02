import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import experiencesData from 'src/app/data/experience.data';

@Component({
	selector: 'app-experience-page',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
	public experiences = experiencesData;

	private eidSubscribtion: any;
	public highlightedExperience?: number;
	
	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		// Grab the id from the url
		this.eidSubscribtion = this.route.paramMap.subscribe(params => {
			const eid = params.get('id');
			
			if (eid === null || isNaN(parseInt(eid))) return;

			// If not, set the active experience
			this.highlightedExperience = parseInt(eid);
		});
	}

	ngOnDestroy(): void {
		this.eidSubscribtion.unsubscribe();
	}
}