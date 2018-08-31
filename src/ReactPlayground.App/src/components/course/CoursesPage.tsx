import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import * as courseActions from "../../actions/courseActions";

export class CoursesPage extends React.Component<{ courses: any[], createCourse: (c: any) => void }, {}> {
    state: any = { course: { title: null } };

    constructor(props: { courses: any[], createCourse: (c: any) => void }) {
        super(props);
    }
    
    public onTitleChange(event: any): any {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course});
    }

    public onClickSave() {
        this.props.createCourse(this.state.course)
    }

    public render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.renderCourseRow)}
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={e => this.onTitleChange(e)}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    value="Save"
                    onClick={() => this.onClickSave()} />
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
        createCourse: (course: any) => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
