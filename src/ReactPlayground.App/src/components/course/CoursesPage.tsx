import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CourseList } from "./CourseList";

import { Button, Loader, Dimmer } from 'semantic-ui-react';
import { isRequestActive } from "redux-request-loading";
import { Link } from "redux-little-router";
import { ApplicationState } from "../../applicationState";
import { Course } from "../../api/course";

export interface CoursesProps {
    loading: boolean;
    courses: Course[];
}

export class CoursesPage extends React.Component<CoursesProps> {
    constructor(props: CoursesProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Dimmer active={this.props.loading}>
                    <Loader />
                </Dimmer>
                <h1>Courses</h1>
                <Link href="/course"><Button primary>Add Course</Button></Link>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

function mapStateToProps(state: ApplicationState) {
    return {
        courses: state.courses || [],
        loading: isRequestActive(state, "loadCourses")
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
