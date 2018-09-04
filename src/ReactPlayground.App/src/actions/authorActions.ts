import * as actionTypes from './actionTypes';
import { AuthorApi } from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors: any): any {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return async function(dispatch: (p: any) => void) {
        let authors = await AuthorApi.getAllAuthors();
        dispatch(loadAuthorsSuccess(authors));
    }
}
