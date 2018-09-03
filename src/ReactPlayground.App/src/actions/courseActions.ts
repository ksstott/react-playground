import * as actionTypes from './actionTypes';
import { CourseApi } from '../api/mockCourseApi';

export function loadCoursesSuccess(courses: any): any {
    return { type: actionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
    return async function(dispatch: (p: any) => void) {
        let courses = await CourseApi.getAllCourses();
        dispatch(loadCoursesSuccess(courses));
    }
}
