import Button from "components/Button";
import React from "react";
import { Container } from "react-bootstrap";

import EastIcon from "@mui/icons-material/East";

const ActionStrip = ({ text, btnText, onClick, hasBtnArrow }) => {
  return (
    <div className="actionstrip-container">
      <Container>
        <div className="actionstrip-flex">
          <h1 className="action-strip-title">{text}</h1>
          <Button
            btnText={btnText}
            onClick={onClick}
            variant="secondary"
            endIcon={hasBtnArrow ? <EastIcon /> : null}
          />
        </div>
      </Container>
    </div>
  );
};

export default ActionStrip;
