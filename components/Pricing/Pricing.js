import React from "react";
import { Col, Row } from "react-bootstrap";

import { Button } from "components";

const Pricing = () => {
  return (
    <div>
      <Row className="align-center">
        <Col>
          <div className="pricing-card">
            <div>
              <h3 className="plan-name">Free</h3>
              <h1 className="price-text">
                $0 <span>7 days free trial</span>
              </h1>
              <h4 className="pc-text grey">
                Try ‘Product Name’ and get the feel of the product.
              </h4>
              <div className="no-of-interview-flex">
                <h4 className="pc-text">Number of Interviews available</h4>
                <h3 className="interview-count">3</h3>
              </div>
              <h4 className="pc-text">Use all features of the Starter Plan.</h4>
            </div>
            <Button btnText="Start FREE Trial!" variant="Primary" />
          </div>
        </Col>
        <Col>
          <div className="pricing-card xl">
            <div>
              <h3 className="plan-name">Starter</h3>
              <h1 className="price-text">
                $5 <span>per month</span>
              </h1>
              <h4 className="pc-text grey">
                Get your hiring process started and grow your organization
              </h4>
              <div className="no-of-interview-flex">
                <h4 className="pc-text">Number of Interviews available</h4>
                <h3 className="interview-count">10</h3>
              </div>
              <h4 className="pc-text">Explore all features here.</h4>
              <div className="price-after">
                <p>Price after 10 interviews:</p>
                <h4>
                  $2 <span>per interview</span>
                </h4>
              </div>
            </div>
            <Button btnText="Get Started!" variant="Primary" />
          </div>
        </Col>
        <Col>
          <div className="pricing-card">
            <div>
              <h3 className="plan-name">Enterprise</h3>
              <h1 className="price-text">
                $10 <span>per month</span>
              </h1>
              <h4 className="pc-text grey">
                Maximize your hiring process while being efficient.
              </h4>
              <div className="no-of-interview-flex">
                <h4 className="pc-text">Number of Interviews available</h4>
                <h3 className="interview-count">20</h3>
              </div>
              <h4 className="pc-text mb-2">Extra feature.</h4>
              <Button btnText="Invite External Reviewers" variant="tertiary" />
              <div className="price-after mt-4">
                <p>Price after 20 interviews:</p>
                <h4>
                  $3 <span>per interview</span>
                </h4>
              </div>
            </div>
            <Button btnText="Get Started!" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
