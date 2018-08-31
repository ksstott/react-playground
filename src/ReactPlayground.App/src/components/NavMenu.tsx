import React = require("react");
import { Link } from "redux-little-router";

export class NavMenu extends React.Component {
    public render() {
        return (
            <div>
                <Link href="/">Home</Link>
                {" | "}
                <Link href="/about">About</Link>
                {" | "}
                <Link href="/courses">Courses</Link>
            </div>
        );
    }
}
