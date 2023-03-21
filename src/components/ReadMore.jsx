import React, { useState } from "react";


import './ReadMore.scss';

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...leer mas" : " mostrar menos"}
      </span>
    </p>
  );
};

export default ReadMore;
