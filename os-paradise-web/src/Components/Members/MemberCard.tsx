import { faUtensilSpoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardTitle, Row } from "reactstrap";
import { IPlayer } from "../../Interfaces";

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
          <img src={`https://wiseoldman.net/img/runescape/icons_small/${props.data.type}.png`} width="14px" alt={props.data.type} title={props.data.type} />{" "}
          {props.data.displayName} {props.data.role === "leader" && <FontAwesomeIcon icon={faUtensilSpoon} title="Leader" />}
        </CardTitle>
        <small>Joined: {joinDate.toLocaleDateString()}</small>
      </Card>
    </Row>
  );
}

export default MemberCard;
