import { Card, CardFooter, CardText, CardTitle, Row } from "reactstrap";
import { IPlayer } from "../../Interfaces";

interface IProps {
  data: IPlayer;
}

/**
 * Render component for a member's basic information.
 */
function MemberCard(props: IProps) {
  return (
    <Row>
      <Card
        body
        inverse
        style={{
          backgroundColor: "#40444b",
          borderColor: "#333",
          maxWidth: "600px",
        }}
      >
        <CardTitle tag="h5" style={{ color: "#FFF" }}>
          {props.data.displayName}
        </CardTitle>
        <CardText>{props.data.role}</CardText>
        <CardText>{props.data.build}</CardText>
        <CardFooter>{props.data.joinedAt}</CardFooter>
      </Card>
    </Row>
  );
}

export default MemberCard;
