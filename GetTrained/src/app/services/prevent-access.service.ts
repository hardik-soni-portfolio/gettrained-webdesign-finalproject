import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreventAccessService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('id')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
