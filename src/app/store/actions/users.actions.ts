import { Action } from '@ngrx/store';

export class AddUser implements Action {
    readonly type = 'add_user';

    constructor(public payload: any){

    }
}