import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CourseList } from "./CourseList";

export class CoursesPage extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <CourseList courses={this.props.courses} />
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
