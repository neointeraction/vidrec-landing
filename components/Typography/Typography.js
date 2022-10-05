import React from "react";

const Typography = ({ level, text }) => {
  switch (level) {
    case "h2":
      return <h2 className="h2">{text}</h2>;
    case "h3":
      return <h3 className="h3">{text}</h3>;
    case "h4":
      return <h4 className="h4">{text}</h4>;
    case "p1":
      return <p className="p1">{text}</p>;
    case "p2":
      return <p className="p2">{text}</p>;
    case "p3":
      return <p className="p3">{text}</p>;
    case "h1":
    default:
      return <h1 className="h1">{text}</h1>;
  }
};

export default Typography;
