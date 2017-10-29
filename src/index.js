import React from "react";

const encode = str => {
  return encodeURIComponent(str.trim())
    .replace(/%3B/g, ";")
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");
};

const Gravizo = ({ graph, ...props }) => {
  const src = `http://gravizo.com/svg?${encode(graph)}`;
  return <img {...props} src={src} />;
};

export default Gravizo;
