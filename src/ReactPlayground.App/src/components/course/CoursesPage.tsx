import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CourseList } from "./CourseList";

import { Button, Loader, Dimmer } from 'semantic-ui-react';
import { isRequestActive } from "redux-request-loading";

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
                <Button href="/course" primary>Add Course</Button>
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
