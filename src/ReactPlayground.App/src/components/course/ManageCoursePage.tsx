import * as React from "react";
import { connect } from "react-redux";
import { CourseForm } from './CourseForm';
import { InputOnChangeData, Dimmer, Loader, DropdownItemProps } from 'semantic-ui-react';
import { saveCourse } from "../../actions/courseActions";
import { ThunkDispatch } from "redux-thunk";
import { push } from "redux-little-router";
import { isRequestActive } from "redux-request-loading";
import { Course } from "../../api/course";
import { Author } from "../../api/author";
import { ApplicationState } from "../../applicationState";

export interface ManageCourseProps {
    course: Course;
    saveCourse: (course: Course) => void;
    loading: boolean;
    saving: boolean;
    authors: DropdownItemProps[];
}

export interface ManageCourseState {
    course: Course & { [key: string]: any };
    errors: any;
}

class ManageCoursePage extends React.Component<ManageCourseProps, ManageCourseState> {
    constructor(props: ManageCourseProps) {
        super(props);

        this.state = {
            course: { ...props.course },
            errors: {}
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    static getDerivedStateFromProps(props: ManageCourseProps, state: ManageCourseState) {
        if (props.course.id !== state.course.id) {
            return { ... state, course: { ...props.course } };
        }

        return null;
    }

    updateCourseState(event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) {
        this.state.course[data['name'] as string] = data.value;
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

function mapStateToProps(state: ApplicationState): ManageCourseProps {
    const courseId = state.router.params ? state.router.params.id : null;
    let course: Course = { id: '', title: '', authorId: '', length: '', category: '', watchHref: '' };
    if (courseId && state.courses.length) {
        course = state.courses.find((c: Course) => c.id === courseId) || course;
    }

    return {
        course: course,
        authors: state.authors.map((a: Author) => {
            return {
                value: a.id,
                text: `${a.firstName} ${a.lastName}`
            };
        }),
        loading: isRequestActive(state, "loadAuthors") || isRequestActive(state, "loadCourses"),
        saving: isRequestActive(state, "saveCourse"),
        saveCourse: () => null
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, any, any>) {
    return {
        saveCourse: async (course: Course) => {
            await dispatch(saveCourse(course));
            dispatch(push('/courses'));
        }
    };
}

export const ManageCoursePageRedux = connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
