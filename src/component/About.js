import React from "react";
import { Row, Col } from 'antd';

import './About.css'

export default class About extends React.Component {

    render() {
        return (
            <div className="About">
                <Row>
                    <Col span={6} offset={9}>
                        <img src="assets/img/my_profile.jpg" alt="Mohammad Javad Ghasemy" title="Mohammad Javad Ghasemy" width="100%" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={8} offset={8}>
                    </Col>
                </Row>
            </div>
        );
    }
}