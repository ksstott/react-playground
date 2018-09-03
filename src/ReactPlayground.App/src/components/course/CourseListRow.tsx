import * as React from "react";
import { Link } from "redux-little-router";
import { Table } from 'semantic-ui-react';

export const CourseListRow: React.SFC<{ course: any }> = (props: { course: any }) => {
    return (
            <Table.Row>
                <Table.Cell><a href={props.course.watchHref} target="_target">Watch</a></Table.Cell>
                <Table.Cell><Link href={`/course/${props.course.id}`}>{props.course.title}</Link></Table.Cell>
                <Table.Cell>{props.course.authorId}</Table.Cell>
                <Table.Cell>{props.course.category}</Table.Cell>
                <Table.Cell>{props.course.length}</Table.Cell>
            </Table.Row>
    );
};
