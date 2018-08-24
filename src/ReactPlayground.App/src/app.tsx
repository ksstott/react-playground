import * as React from "react";

import { Fragment } from "redux-little-router";
import { Hello } from "./components/Hello";
import { About } from "./components/About";
import { NavMenu } from "./components/NavMenu";

export class App extends React.Component<{}> {
    public render() {
        return (
            <div>
                <NavMenu />
                <Fragment forRoute="/">
                    <div>
                        <Fragment forRoute="/">
                            <Hello compiler="TypeScript" framework="React" />
                        </Fragment>
                        <Fragment forRoute="/about">
                            <About />
                        </Fragment>
                    </div>
                </Fragment>
            </div>
        );
    }
}
