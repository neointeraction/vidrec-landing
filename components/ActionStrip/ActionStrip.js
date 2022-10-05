import Button from "components/Button";
import React from "react";
import { Container } from "react-bootstrap";

const ActionStrip = ({ text, btnText, onClick }) => {
  return (
    <div className="actionstrip-container">
      <Container>
        <div className="actionstrip-flex">
          <h1 className="action-strip-title">{text}</h1>
          <Button btnText={btnText} onClick={onClick} variant="secondary" />
        </div>
      </Container>
    </div>
  );
};

export default ActionStrip;
