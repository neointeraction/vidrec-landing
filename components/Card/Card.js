import { Typography } from "components";
import Image from "next/image";
import React from "react";

const Card = ({ cardImg, title, subtitle, fullWidth }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <Image src={cardImg} alt={cardImg} />
      </div>
      <div className={`card-content ${fullWidth ? "full-width" : ""}`}>
        <Typography level="h3" text={title} />
        <Typography level="p2" text={subtitle} />
      </div>
    </div>
  );
};

export default Card;
