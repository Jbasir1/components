import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        "Discover how our streamlined approach helps you manage your projects efficiently.
         We focus on delivering clean, responsive components that integrate seamlessly into your workflow, 
         saving you time and effort during development."
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        "Explore our extensive library of pre-built elements designed to scale with your application. 
        Whether you are building a landing page or a complex dashboard, 
        our flexible design patterns ensure consistency across all devices and screen sizes."
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;