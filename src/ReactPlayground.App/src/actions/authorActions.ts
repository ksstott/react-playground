import * as actionTypes from './actionTypes';
import { AuthorApi } from '../api/mockAuthorApi';
import { loadAndTrack } from "redux-request-loading";
import { Dispatch, AnyAction } from 'redux';
import { Author } from '../api/author';

export function loadAuthorsSuccess(authors: Author[]): AnyAction {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return async function(dispatch: Dispatch) {
        let authors = await loadAndTrack(dispatch, "loadAuthors", AuthorApi.getAllAuthors());
        dispatch(loadAuthorsSuccess(authors));
    }
}
