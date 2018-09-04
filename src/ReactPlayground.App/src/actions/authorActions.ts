import * as actionTypes from './actionTypes';
import { AuthorApi } from '../api/mockAuthorApi';
import { loadAndTrack } from "redux-request-loading";
import { Dispatch } from 'redux';

export function loadAuthorsSuccess(authors: any): any {
    return { type: actionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return async function(dispatch: Dispatch) {
        let authors = await loadAndTrack(dispatch, "loadAuthors", AuthorApi.getAllAuthors());
        dispatch(loadAuthorsSuccess(authors));
    }
}
