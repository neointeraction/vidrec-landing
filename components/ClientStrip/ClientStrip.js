import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

import Clients from "assets/images/temp/clients.png";

const ClientStrip = () => {
  return (
    <div className="client-strip-container">
      <Container>
        <Image src={Clients} alt="Clients" />
      </Container>
    </div>
  );
};

export default ClientStrip;
