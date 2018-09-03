import * as React from "react";
import { Link } from "redux-little-router";

export const CourseListRow: React.SFC<{ course: any }> = (props: { course: any }) => {
    return (
            <tr>
                <td><a href={props.course.watchHref} target="_target">Watch</a></td>
                <td><Link href={`/course/${props.course.id}`}>{props.course.title}</Link></td>
                <td>{props.course.authorId}</td>
                <td>{props.course.category}</td>
                <td>{props.course.length}</td>
            </tr>
    );
};
