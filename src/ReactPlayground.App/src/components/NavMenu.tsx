import React = require("react");
import { Link } from "redux-little-router";
import { Menu, Container } from 'semantic-ui-react'

export class NavMenu extends React.Component {
    public render() {
        return (
            <Menu>
                <Container>
                    <Menu.Item>
                        <Link href="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/courses">Courses</Link>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}
