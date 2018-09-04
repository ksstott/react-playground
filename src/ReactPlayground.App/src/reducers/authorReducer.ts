import * as actionTypes from '../actions/actionTypes';
import { Author } from '../api/author';
import { AnyAction } from 'redux';

export default function authorReducer(state: Author[] = [], action: AnyAction): ReadonlyArray<Author> {
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
    }

    return state;
}
