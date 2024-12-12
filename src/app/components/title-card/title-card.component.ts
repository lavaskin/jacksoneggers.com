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
			href: 'assets/resume.pdf',
			title: 'resume',
			icon: 'fas fa-file-pdf'
		},
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