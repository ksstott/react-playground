import * as React from "react";
import { Form, Button, InputProps, DropdownItemProps } from 'semantic-ui-react';
import { Course } from "../../api/course";

export interface CourseFormProps {
    onSave: () => void;
    onChange: (event: React.SyntheticEvent<HTMLElement>, data: InputProps) => void
    course: Course;
    errors: any;
    allAuthors: DropdownItemProps[];
    saving: boolean;
}

export const CourseForm: React.SFC<any> = (props: CourseFormProps) => {
    return (
        <div>
            <h1>Manage Course</h1>
             <Form onSubmit={props.onSave}>
                <Form.Input
                    label='Title'
                    name="title"
                    value={props.course.title}
                    onChange={(event, data) => props.onChange(event, data)}
                    error={props.errors.title} />
                <Form.Select
                    label='Author'
                    name="authorId"
                    value={props.course.authorId}
                    onChange={(event, data) => props.onChange(event, data)}
                    error={props.errors.authorId}
                    placeholder="Select Author"
                    options={props.allAuthors} />
                <Form.Input
                    label='Category'
                    name="category"
                    value={props.course.category}
                    onChange={(event, data) => props.onChange(event, data)}
                    error={props.errors.category} />
                <Form.Input
                    label='Length'
                    name="length"
                    value={props.course.length}
                    onChange={(event, data) => props.onChange(event, data)}
                    error={props.errors.length} />
                <Button type='submit' primary loading={props.saving}>Submit</Button>
            </Form>
        </div>
    );
};
