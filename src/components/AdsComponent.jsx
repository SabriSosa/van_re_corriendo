import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const AdsComponent = ({
  classNames,
  dataAdClient,
  style,
  dataAdSlot,
  dataAdLayoutKey,
  dataAddFormat,
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <Container className={classNames}>
      <ins
        className="adsbygoogle"
        style={style || { display: "block", textAlign: "center" }}
        data-ad-client={dataAdClient}
        data-ad-slot={dataAdSlot}
        data-ad-layout-key={dataAdLayoutKey}
        data-ad-format={dataAddFormat || "auto"}
        data-full-width-responsive="true"
      ></ins>
    </Container>
  );
};

export default AdsComponent;
