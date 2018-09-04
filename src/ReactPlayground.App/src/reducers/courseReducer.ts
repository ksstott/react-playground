import * as actionTypes from '../actions/actionTypes';
import { Course } from '../api/course';
import { AnyAction } from 'redux';

export default function courseReducer(state: Course[] = [], action: AnyAction): Course[] {
    switch (action.type) {
        case actionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        case actionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                { ...action.course }
            ];
        case actionTypes.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id != action.course.id),
                { ...action.course }
            ];
    }

    return state;
}
