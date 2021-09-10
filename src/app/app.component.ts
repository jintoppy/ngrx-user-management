import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApplicationState } from './store/reducers';
import { Observable } from 'rxjs';
import { AddUser } from './store/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$?: Observable<any>;
  constructor(private store: Store<IApplicationState>){}

  ngOnInit(){
    this.store.dispatch({type: 'get_users'});
    this.users$ = this.store.select(state => state.users.data);
  }

  deleteUser(user: any){
    this.store.dispatch({
      type: 'delete_user',
      payload: user
    });
  }

  addUser(){
    // this.store.dispatch(new AddUser({name: `user${Math.random()}`}));
    this.store.dispatch({
      type: 'add_user',
      payload: {name: `user${Math.random()}`}
    });
  }
}
