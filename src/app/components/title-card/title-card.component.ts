import { Component, OnInit } from '@angular/core';
import Link from 'src/app/models/link.model';

@Component({
	selector: 'app-title-card',
	templateUrl: './title-card.component.html',
	styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnInit {
	public links: Link[] = [
		{
			href: 'https://github.com/lavaskin',
			title: 'github',
			icon: 'fab fa-github'
		},
		{
			href: 'https://linkedin.com/in/eggersja',
			title: 'linkedin',
			icon: 'fab fa-linkedin'
		},
		{
			href: 'https://docs.google.com/document/d/1P4fcC_aMRjLTD9NOmFajZOYWZbAOfX4qoVpqgkVrmg8/edit?usp=sharing',
			title: 'resume',
			icon: 'fas fa-file'
		}
	];
	public contacts: Link[] = [
		{
			href: 'mailto:me@jacksoneggers.com',
			title: 'email',
			icon: 'fas fa-envelope'
		},
		{
			href: 'tel:5412502958',
			title: 'phone',
			icon: 'fas fa-phone'
		}
	];
	
	constructor() { }

	ngOnInit(): void { }
}