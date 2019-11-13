import React from "react";
import { Row, Col } from 'antd';
import About from './About';

import "./App.css";

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Row><About /></Row>
            </div>
        );
    }
}