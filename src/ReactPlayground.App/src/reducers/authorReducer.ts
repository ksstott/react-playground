import * as actionTypes from '../actions/actionTypes';

export default function authorReducer(state: any[] = [], action: any): any {
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
    }

    return state;
}
