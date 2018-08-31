import * as actionTypes from './actionTypes';

export function createCourse(course: any): any {
    return { type: actionTypes.CREATE_COURSE, course };
}
