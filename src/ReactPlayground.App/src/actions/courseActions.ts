import * as actionTypes from './actionTypes';
import { CourseApi } from '../api/mockCourseApi';
import { Dispatch, Action, AnyAction } from 'redux';

export function loadCoursesSuccess(courses: any[]): AnyAction {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course: any): AnyAction {
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course: any): AnyAction {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return async function(dispatch: Dispatch) {
        let courses = await CourseApi.getAllCourses();
        dispatch(loadCoursesSuccess(courses));
    }
}

export function saveCourse(course: any, param2: any) {
    return async (dispatch: Dispatch<Action>, getState: () => any) => {
        let savedCourse = await CourseApi.saveCourse(course);
        savedCourse.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    };
}
