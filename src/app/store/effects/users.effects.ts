import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions, 
        private http: HttpClient       
    ){

    }

    @Effect()
    loadUser$ = this.actions$.
        pipe(
            ofType('get_users'),
            switchMap(() => this.http.get('https://fakestoreapi.com/users')),
            map((users: any) => ({
                type: 'users_loaded',
                payload: users
            }))

        )

}