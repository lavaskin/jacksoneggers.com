import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public color: string = 'transparent';
	public border: string = 'none';

	constructor() { }

	ngOnInit(): void {
		const navbar = document.getElementsByTagName('nav')[0];

		// Hook up scroll listener to change navbar styling
		window.addEventListener('scroll', () => {
			if (window.scrollY > 10) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		});
	}

	public scrollToTop(): void {
		window.scrollTo({ top: 0 });
	}
}