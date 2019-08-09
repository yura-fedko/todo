import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, from} from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { State } from '../data';

export class TaskGuard implements CanActivate {
  state = State;
  constructor(private router: Router) {

  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (Cookie.get('id') === 'null' || Cookie.get('id') === null) {
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }


    }
}
