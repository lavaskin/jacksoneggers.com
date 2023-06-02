import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private router: Router) { }
	
	ngOnInit(): void {
		// Setup watcher for route changes to scroll to the top of the page
		this.router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}
			
			window.scrollTo(0, 0);
		});
	}
}
