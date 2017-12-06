import {INC_NUMBER, DEC_NUMBER} from '../actions';

export default function performAction(state = {num: 0}, action) {
    switch(action.type) {
        case INC_NUMBER:
            console.log('Action performed from the reducer');
            console.log(state, action);
            let num = 0;
            num = state.num + 1;
            return {num};
        case DEC_NUMBER:
            num = state.num - 1;
            return {num};
        default:
            return state;
    }
}


/*
import {INC_NUMBER, DEC_NUMBER} from '../actions';
export default function myRootReducer(state = {num: 0}, action) {
    let num = "";
    switch(action.type) {
        case INC_NUMBER:
            num = state.num + 1;
            return {num};
        case DEC_NUMBER:
            num = state.num - 1;
            return {num};
        default:
            return state;
    }
}
*/