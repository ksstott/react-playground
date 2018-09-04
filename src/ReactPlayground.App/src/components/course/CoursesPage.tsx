import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CourseList } from "./CourseList";

import { Button, Loader, Dimmer } from 'semantic-ui-react';
import { isRequestActive } from "redux-request-loading";
import { Link } from "redux-little-router";

export class CoursesPage extends React.Component<any, any> {
    constructor(props: any) {
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

function mapStateToProps(state: any, ownProps: any) {
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
