import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import NeoLogo from "assets/images/neointeraction_logo.svg";
import FooterLogo from "assets/images/footer-logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="footer-block">
        <Container>
          <Row className="align-center">
            <Col xs={3}>
              <Image src={FooterLogo} alt="FooterLogo" />
              <h4 className="footer-text">
                One-liner about <br />
                the product
              </h4>
              <div style={{ marginBottom: 140 }} />
            </Col>
            <Col xs={9}>
              <Row>
                <Col>
                  <h4 className="Footer-title">Products</h4>
                  <ul className="footer-list">
                    <li className="fl-item">
                      <Link href="/feature">Features</Link>
                    </li>
                    <li className="fl-item">
                      <Link href="/employer">Employer</Link>
                    </li>
                    <li className="fl-item">
                      <Link href="/candidate">Candidate</Link>
                    </li>
                    <li className="fl-item">
                      <Link href="/pricing">Pricing</Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h4 className="Footer-title">Resources</h4>
                  <ul className="footer-list">
                    <li className="fl-item">Blogs</li>
                  </ul>
                </Col>
                <Col>
                  <h4 className="Footer-title">Get in Touch</h4>
                  <ul className="footer-list">
                    <li className="fl-item">
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li className="fl-item">
                      <Link href="/demo">Book a Demo</Link>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h4 className="Footer-title">Legal</h4>
                  <ul className="footer-list">
                    <li className="fl-item">
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li className="fl-item">Terms of Service</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-strip">
        <Container>
          <div className="footer-strip-flex">
            <p>LOGO © Copyright 2022 ‘Product Name’. All rights reserved.</p>
            <p className="footer-text-with-logo">
              A product by
              <a
                href="https://www.neointeraction.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neointeraction Design
              </a>
              <span className="logo-right">
                <Image src={NeoLogo} alt="NeoLogo" />
              </span>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
