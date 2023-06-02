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
		// Hook up scroll listener to change navbar styling
		window.addEventListener('scroll', () => {
			if (window.scrollY > 10) {
				this.color = 'var(--color-fg)';
				this.border = '0.25rem solid var(--color-accent)';
			} else {
				this.color = 'transparent';
				this.border = 'none';
			}
		});
	}

	public scrollToTop(): void {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
}