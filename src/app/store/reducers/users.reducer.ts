export interface IUserState {
    data: any;
}
export const userState = {
    data: []
}
export const reducer = (state = userState, action: any) => {
    if(action.type === 'add_user'){
        return {
            ...state,
            data: [...state.data, action.payload]
        }
    }
    return state;  
};