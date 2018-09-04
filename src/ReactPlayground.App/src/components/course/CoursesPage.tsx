import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CourseList } from "./CourseList";

import { Button } from 'semantic-ui-react';

export class CoursesPage extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h1>Courses</h1>
                <Button href="/course" primary>Add Course</Button>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

function mapStateToProps(state: any, ownProps: any) {
    return {
        courses: state.courses || []
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
