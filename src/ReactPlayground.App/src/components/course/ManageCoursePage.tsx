import * as React from "react";
import { connect } from "react-redux";
import { CourseForm } from './CourseForm';
import { InputOnChangeData, Dimmer, Loader } from 'semantic-ui-react';
import { saveCourse } from "../../actions/courseActions";
import { ThunkDispatch } from "redux-thunk";
import { push } from "redux-little-router";
import { isRequestActive } from "redux-request-loading";

class ManageCoursePage extends React.Component<{ course: any, authors: any[], saveCourse: (course: any) => void, loading: boolean, saving: boolean }, { course: any, errors: any }> {
    constructor(props: { course: any, authors: any[], saveCourse: (course: any) => void, loading: boolean, saving:boolean }) {
        super(props);

        this.state = {
            course: { ...props.course },
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    static getDerivedStateFromProps(props: any, state: any) {
        if (props.course.id !== state.course.id) {
            return {
                course: { ...props.course }
            };
        }

        return null;
    }

    updateCourseState(event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
        this.state.course[data.name] = data.value;
        return this.setState({ course: this.state.course });
    }

    saveCourse() {
        this.props.saveCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <Dimmer active={this.props.loading}>
                    <Loader />
                </Dimmer>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={this.props.authors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    saving={this.props.saving} />
            </div>
        );
    }
}

function getCourseById(courses: any[], courseId: string) {
    return courses.find(c => c.id === courseId);
}

function mapStateToProps(state: any, ownProps: any) {
    const courseId = state.router.params ? state.router.params.id : null;
    let course;
    if (courseId && state.courses.length) {
        course = getCourseById(state.courses, courseId);
    }
    else {
        course = { id: '', title: '', authorId: '', length: '', category: '' };
    }

    return {
        course: course,
        authors: state.authors.map((a: any) => {
            return {
                value: a.id,
                text: `${a.firstName} ${a.lastName}`
            };
        }),
        loading: isRequestActive(state, "loadAuthors") || isRequestActive(state, "loadCourses"),
        saving: isRequestActive(state, "saveCourse")
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
    return {
        saveCourse: async (course: any) => {
            await dispatch(saveCourse(course, null));
            dispatch(push('/courses'));
        }
    };
}

export const ManageCoursePageRedux = connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
