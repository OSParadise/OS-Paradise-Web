import { Card, CardTitle, Row } from "reactstrap";
import { IPlayer } from "../../Interfaces";
import { CapitalizeFirstLetter } from "../../Utilities/HelperFunctions";

interface IProps {
  data: IPlayer;
}

/**
 * Render component for a member's basic information.
 */
function MemberCard(props: IProps) {
  const joinDate = new Date(props.data.joinedAt);

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
          <img
            src={`https://wiseoldman.net/img/runescape/roles/${CapitalizeFirstLetter(
              props.data.role
            )}.png`}
            width="20px"
            alt={props.data.role}
            title={props.data.role}
          />{" "}
          {props.data.displayName}
        </CardTitle>
        <small>Joined: {joinDate.toLocaleDateString()}</small>
      </Card>
    </Row>
  );
}

export default MemberCard;
