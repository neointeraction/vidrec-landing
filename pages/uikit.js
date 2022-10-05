import React from "react";
import { SSRProvider } from "react-bootstrap";
import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EastIcon from "@mui/icons-material/East";

// comsponents
import { ActionStrip, Button, Footer, Header, Typography } from "components";

const uikit = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <Head>
        <title>Ui-kit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div style={{ padding: "20px 0" }}>
              <Card>
                <Card.Header>Typography</Card.Header>
                <Card.Body>
                  <Typography level="h1" text="H1 - DM Sans/Bold/58px" />
                  <Typography level="h2" text="H2 - DM Sans/Bold/40px" />
                  <Typography level="h3" text="H3 - DM Sans/Bold/24px" />
                  <Typography level="h4" text="H4 - DM Sans/Bold/16px" />
                  <Typography level="p1" text="P1 - Manrope/Medium/20px" />
                  <Typography level="p2" text="P2 - Manrope/Medium/16px" />
                  <div style={{ height: 8 }}></div>
                  <Typography level="p3" text="P3 - Manrope/Medium/12px" />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={12}>
            <div style={{ padding: "20px 0" }}>
              <Card>
                <Card.Header>Buttons</Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Button btnText="Primary" />
                    </Col>
                    <Col>
                      <Button btnText="Primary" endIcon={<EastIcon />} />
                    </Col>
                    <Col>
                      <Button btnText="Secondary" variant="secondary" />
                    </Col>
                    <Col>
                      <Button btnText="Tertiary" variant="tertiary" />
                    </Col>
                    <Col>
                      <Button
                        btnText="Tertiary"
                        variant="tertiary"
                        endIcon={<ArrowDropDownIcon />}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={12}>
            <div style={{ padding: "20px 0" }}>
              <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Header />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={12}>
            <div style={{ padding: "20px 0" }}>
              <Card>
                <Card.Header>Footer</Card.Header>
                <Card.Body>
                  <Footer />
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col sm={12}>
            <div style={{ padding: "20px 0" }}>
              <Card>
                <Card.Header>Action strip</Card.Header>
                <Card.Body>
                  <ActionStrip
                    text={
                      <>
                        Learn to stand-out from the crowd with your
                        <span className="highlight-yellow"> Video Resume.</span>
                      </>
                    }
                    btnText="Candidates"
                    onClick={() => {}}
                  />
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default uikit;

uikit.getLayout = function getLayout(page) {
  return <>{page}</>;
};
