import * as React from "react";
import { CourseListRow } from "./CourseListRow";
import { Table } from 'semantic-ui-react'

export const CourseList: React.SFC<{ courses: any[] }> = (props: { courses: any[] }) => {
    return (
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Author</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Length</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.courses.map(course => <CourseListRow key={course.id} course={course}/>)}
            </Table.Body>
        </Table>
    );
};
