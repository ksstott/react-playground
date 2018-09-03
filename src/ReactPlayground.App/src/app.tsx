import * as React from "react";

import { Fragment } from "redux-little-router";
import { Hello } from "./components/Hello";
import { About } from "./components/About";
import { NavMenu } from "./components/NavMenu";
import Courses from "./components/course/CoursesPage";
import { Container } from 'semantic-ui-react'

export class App extends React.Component {
    public render() {
        return (
            <div>
                <NavMenu />
                <Fragment forRoute="/">
                    <Container>
                        <Fragment forRoute="/">
                            <Hello compiler="TypeScript" framework="React" />
                        </Fragment>
                        <Fragment forRoute="/about">
                            <About />
                        </Fragment>
                        <Fragment forRoute="/courses">
                            <Courses />
                        </Fragment>
                    </Container>
                </Fragment>
            </div>
        );
    }
}
