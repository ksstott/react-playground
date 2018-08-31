import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state: any[] = [], action: any): any {
    switch (action.type) {
        case actionTypes.CREATE_COURSE:
            return [...state, { ...action.course }];
    }

    return state;
}
