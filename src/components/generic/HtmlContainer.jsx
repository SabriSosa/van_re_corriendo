import { Container } from "react-bootstrap";
import DOMPurify from "dompurify";

function HtmlContainer({ text, className }) {
  return (
    <Container fluid
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(text,{ ADD_ATTR: ['target'] }),
      }}
      className={className}
    />
  );
}

export default HtmlContainer;
