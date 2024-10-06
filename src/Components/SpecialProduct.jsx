import { Nav, Tab,Row } from "react-bootstrap";
import Accessories from "./Accessories";
import CoffeeBeans from "./CoffeeBeans";
import Coffee from "./Coffee";
import SpecialCoffee from "./SpecialCoffee";

const SpecialProduct = () => {
  return (
    <div className="header">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <div className="tab">
          <Nav variant="underline" className="flex-row nav-tab">
            <Nav.Item className="nav-items">
              <Nav.Link eventKey="first">Accessories</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-items">
              <Nav.Link eventKey="second">Coffee Powder</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-items">
              <Nav.Link eventKey="third">Instant Coffee</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-items">
              <Nav.Link eventKey="fourth">Special Coffee</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="tab-pane">
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Accessories />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <CoffeeBeans/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Coffee/>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <SpecialCoffee/>
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Row>
    </Tab.Container>
    </div>
  );
};

export default SpecialProduct;
