import React from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";

function VerticalTabs({ data }) {
  return (
    <div className="vertical-tab-container">
      <Tab.Container id="left-tabs-example" defaultActiveKey={data[0].tabTitle}>
        <Row>
          <Col sm={5}>
            <Nav variant="pills" className="flex-column">
              {data.map((item) => (
                <Nav.Item>
                  <Nav.Link eventKey={item.tabTitle}>
                    <span>{item.tabTitle}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              {data.map((item) => (
                <Tab.Pane eventKey={item.tabTitle}>{item.tabContent}</Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default VerticalTabs;
