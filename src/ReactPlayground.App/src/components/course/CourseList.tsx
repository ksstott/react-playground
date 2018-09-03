import * as React from "react";
import { CourseListRow } from "./CourseListRow";

export const CourseList: React.SFC<{ courses: any[] }> = (props: { courses: any[] }) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
            </thead>
            <tbody>
                {props.courses.map(course => <CourseListRow key={course.id} course={course}/>)}
            </tbody>
        </table>
    );
};
