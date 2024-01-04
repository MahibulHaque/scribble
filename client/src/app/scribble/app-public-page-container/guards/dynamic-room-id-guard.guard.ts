import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	UrlTree
} from '@angular/router';
import { customAlphabet, nanoid } from 'nanoid';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DynamicRoomIdGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const id = route.params?.['id'];
		if (!id) {
			return this.router.navigate(['/404'], { replaceUrl: true });
		}

		// Define a regular expression to validate the ID format
		const idRegex = /^[A-Za-z0-9\-_]{21}$/;

		// Validate the ID format using the regular expression
		const isValidId = idRegex.test(id);

		if (!isValidId) {
			// Redirect to 404 route if ID is not valid
			return this.router.navigate(['/404'], { replaceUrl: true });
		}
		return true;
	}
}
