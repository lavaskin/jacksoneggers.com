import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import experiencesData from '../../data/experience.data';
import { ExperienceItemComponent } from '../../components/experience-item/experience-item.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    imports: [ExperienceItemComponent]
})
export class ExperienceComponent implements OnInit {
	public experiences = experiencesData;

	private eidSubscription!: Subscription;
	public highlightedExperience?: number;

	private _route = inject(ActivatedRoute);

	ngOnInit(): void {
		this.eidSubscription = this._route.paramMap.subscribe(params => {
			const eid = params.get('id');
			
			if (eid === null || isNaN(parseInt(eid))) return;

			this.highlightedExperience = parseInt(eid);
		});
	}

	ngOnDestroy(): void {
		this.eidSubscription.unsubscribe();
	}
}
