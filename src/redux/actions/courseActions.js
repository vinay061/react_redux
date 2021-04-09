import * as types from './actionTypes';

export function creactCourse(course){
    return { type: types.CREATE_COURSE, course : course};
}