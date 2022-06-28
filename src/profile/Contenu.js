import React from "react";
import { Card, Button } from "react-bootstrap";
import Greet from "./Profile";
const Contenu = (props) => {
  const HandleName = (name) => {
    alert(name);
  };

  return (
    <div className="cadr">
      <Card style={{ width: "18rem" }}>
        {/* <Greet>
          <img src={props.person.img} alt={props.person.name} />
        </Greet> */}
        <Card.Body>
          <Card.Title>
            {" "}
            {/* <Greet name={props.person.name} />{" "} */}
          </Card.Title>
          <Card.Text>
            
            <Greet
              bio={props.person.bio}
              profession={props.person.profession}
              name={props.person.name}
            >
              <img src={props.person.img} alt={props.person.name} />
            </Greet>
          </Card.Text>
          <div className="buttonpos">
            <button
              className="bu mybu"
              variant="outline-secondary"
              onClick={() => HandleName(props.person.name)}
            >
              more info
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contenu;
