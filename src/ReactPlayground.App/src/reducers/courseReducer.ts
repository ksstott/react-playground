import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state: any[] = [], action: any): any {
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
    }

    return state;
}
