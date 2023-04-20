import { Container } from "react-bootstrap";
import DOMPurify from "dompurify";

function HtmlContainer({ text, className }) {
  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(text),
      }}
      className={className}
    />
  );
}

export default HtmlContainer;