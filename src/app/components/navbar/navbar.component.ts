import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

const SCROLL_EVENT_KEY = 'scroll';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
	imports: [
		RouterModule
	],
})
export class NavbarComponent implements OnInit, OnDestroy {
	public color: string = 'transparent';
	public border: string = 'none';

	private _scrollHandler: (() => void) | undefined;

	ngOnInit(): void {
		const navbar = document.getElementsByTagName('nav')[0];

		this._scrollHandler = () => {
			if (window.scrollY > 10) {
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		};

		window.addEventListener(SCROLL_EVENT_KEY, this._scrollHandler);
	}

	public scrollToTop(): void {
		window.scrollTo({ top: 0 });
	}

	ngOnDestroy(): void {
		if (this._scrollHandler) {
			window.removeEventListener(SCROLL_EVENT_KEY, this._scrollHandler);
		}
	}
}
