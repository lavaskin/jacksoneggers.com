import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, NavbarComponent]
})
export class AppComponent implements OnInit {
	private _router = inject(Router);
	
	ngOnInit(): void {
		this._router.events.subscribe((evt) => {
			if (!(evt instanceof NavigationEnd)) {
				return;
			}

			window.scrollTo(0, 0);
		});
	}
}
