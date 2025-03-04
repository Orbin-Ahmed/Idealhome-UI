import React from "react";
import Accordion from "react-bootstrap/Accordion";

type AccordionItemProps = {
  title: string;
  content: string;
  panel: string;
  expanded: string | null;
  handleChange: (panel: string) => () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  panel,
  handleChange,
}) => (
  <Accordion.Item eventKey={panel}>
    <Accordion.Header onClick={handleChange(panel)}>{title}</Accordion.Header>
    <Accordion.Body>
      <p>{content}</p>
    </Accordion.Body>
  </Accordion.Item>
);

export default AccordionItem;
