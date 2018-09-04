import { Course } from "./api/course";
import { Location } from 'redux-little-router';
import { Author } from "./api/author";
import { LoadingState } from "redux-request-loading";

export interface ApplicationState extends LoadingState {
    router: Location;
    courses: Course[];
    authors: Author[];
}
