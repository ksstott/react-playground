import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import * as courseActions from "../../actions/courseActions";

export class CoursesPage extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.renderCourseRow)}
            </div>
        );
    }

    renderCourseRow(course: any, index: number): any {
        return (<div key={index}>{course.title}</div>);
    }
}

function mapStateToProps(state: any, ownProps: any) {
    debugger;
    return {
        courses: state.courses || []
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
