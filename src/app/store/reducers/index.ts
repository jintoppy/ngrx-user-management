import { ActionReducerMap } from '@ngrx/store';

export interface IApplicationState {
    users: {
        data: any
    }
}

export const userState = {
    data: []
};


const userReducer = (state = userState, action: any) => {
    if(action.type === 'add_user'){
        return {
            ...state,
            data: [...state.data, action.payload]
        }
    }
    return state;  
};


export const reducer: ActionReducerMap<IApplicationState> = {
    users: userReducer
};

