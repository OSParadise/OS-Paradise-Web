import { useEffect, useState } from "react";
import { Button, Card, CardTitle, Col, Row, Spinner } from "reactstrap";
import { GetGroupCompetitions, GetGroupDetails } from "../API/WiseOldManApi";
import welcomeBanner from "../Images/welcome-banner.png";
import { ICompetitions, IGroup } from "../Interfaces";
import { getVersion } from "../Utilities/Environment";

/**
 * Render component for the home page.
 */
function Home() {
  const [ongoingCompetitions, setOngoingCompetitions] = useState<
    ICompetitions[]
  >([]);
  const [pastCompetitions, setPastCompetitions] = useState<ICompetitions[]>([]);
  const [groupDetails, setGroupDetails] = useState<IGroup>();

  useEffect(() => {
    const fetchCompetitions = async () => {
      const data = await GetGroupCompetitions();

      setOngoingCompetitions(
        data.filter((x) => new Date(x.endsAt) > new Date())
      );
      setPastCompetitions(data.filter((x) => new Date(x.endsAt) < new Date()));
    };

    const fetchGroup = async () => {
      const data = await GetGroupDetails();
      setGroupDetails(data);
    };

    fetchCompetitions();
    fetchGroup();
  }, []);

  return (
    <div
      style={{
        maxWidth: "96%",
        margin: "auto",
        paddingTop: "30px",
        textAlign: "left",
      }}
    >
      <Row>
        <Col style={{ textAlign: "center", color: "#FFF" }}>
          <legend>
            Welcome to OS Paradise!{" "}
            <span role="img" aria-label="smiling face with hearts">
              🥰
            </span>
          </legend>
          <img src={welcomeBanner} alt="welcome banner" />
          <h3 style={{ paddingTop: "20px" }}>Homeworld</h3>
          <span>{groupDetails?.homeworld}</span>
          <h3>Members</h3>
          <span>{groupDetails?.memberCount}</span>
        </Col>
        <Col>
          <legend style={{ textAlign: "left", color: "#FFF" }}>
            Ongoing Competitions{" "}
            <Spinner
              type="grow"
              color="danger"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </legend>
          {ongoingCompetitions && ongoingCompetitions.length > 0 ? (
            ongoingCompetitions.map((value) => (
              <Row key={value.id} style={{ margin: "0px" }}>
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#40444b", borderColor: "#333" }}
                >
                  <CardTitle tag="h5" style={{ color: "#FFF" }}>
                    {value.title}
                  </CardTitle>
                  <img
                    src={`https://wiseoldman.net/img/runescape/icons/${value.metric}.png`}
                    width="26px"
                    alt={value.metric}
                  />
                </Card>
              </Row>
            ))
          ) : (
            <Card
              body
              inverse
              style={{ backgroundColor: "#40444b", borderColor: "#333" }}
            >
              <CardTitle tag="h5" style={{ color: "#FFF" }}>
                Looks like the clan doesn't have anything going on at the
                moment. Kick back and relax!
              </CardTitle>
              <span
                style={{ textAlign: "center" }}
                role="img"
                aria-label="sparkles"
              >
                ✨
              </span>
            </Card>
          )}
          <legend
            style={{ textAlign: "left", color: "#FFF", paddingTop: "20px" }}
          >
            Previous Competitions{" "}
            <span role="img" aria-label="smiling face with sunglasses">
              😎
            </span>
          </legend>
          {pastCompetitions &&
            pastCompetitions.slice(0, 7).map((value) => (
              <Row key={value.id} style={{ margin: "0px" }}>
                <Card
                  body
                  inverse
                  style={{ backgroundColor: "#40444b", borderColor: "#333" }}
                >
                  <CardTitle tag="h5" style={{ color: "#FFF" }}>
                    {value.title}
                  </CardTitle>
                  <img
                    src={`https://wiseoldman.net/img/runescape/icons/${value.metric}.png`}
                    width="26px"
                    alt={value.metric}
                  />
                </Card>
              </Row>
            ))}
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <Button style={{ backgroundColor: "#40444b", borderColor: "#333" }}>
              See more...
            </Button>
          </div>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <small style={{ color: "#fff" }}>{getVersion()}</small>
      </Row>
    </div>
  );
}

export default Home;
