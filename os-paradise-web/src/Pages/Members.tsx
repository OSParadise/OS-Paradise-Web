import { useEffect, useState } from "react";
import { Card, CardFooter, CardText, CardTitle, Row } from "reactstrap";
import { GetGroupMembers } from "../API/WiseOldManApi";
import { IPlayer } from "../Interfaces";

/**
 * Render component for the members list page.
 */
function Members() {
  const [players, setMembers] = useState<IPlayer[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await GetGroupMembers();
      setMembers(data);
    };

    fetchPlayers();
  }, []);

  return (
    <div
      style={{
        maxWidth: "96%",
        margin: "auto",
        paddingTop: "40px",
        textAlign: "left",
      }}
    >
      <legend style={{ textAlign: "left", color: "#FFF", paddingTop: "20px" }}>
        Members{" "}
        <span role="img" aria-label="women holding hands">
          👭
        </span>
      </legend>
      {players &&
        players.map((value) => (
          <Row key={value.id}>
            <Card body inverse style={{ backgroundColor: "#40444b", borderColor: "#333", maxWidth: "600px" }}>
              <CardTitle tag="h5" style={{ color: "#FFF" }}>
                {value.displayName}
              </CardTitle>
              <CardText>{value.role}</CardText>
              <CardText>{value.build}</CardText>
              <CardFooter>{value.joinedAt}</CardFooter>
            </Card>
          </Row>
        ))}
    </div>
  );
}

export default Members;
