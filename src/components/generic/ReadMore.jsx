import { t } from "@lingui/macro";
import { useState } from "react";
import { isDesktop, isTablet } from "react-device-detect";

import "./ReadMore.scss";
const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const slice = isDesktop ? text.length : isTablet ? 700 : 500;

  return (
    <p className="text">
      {isReadMore ? text.slice(0, slice) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {!isDesktop && (isReadMore ? t`read.more` : t`read.less`)}
      </span>
    </p>
  );
};

export default ReadMore;
