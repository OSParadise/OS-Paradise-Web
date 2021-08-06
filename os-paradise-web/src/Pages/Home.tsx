import { useEffect, useState } from "react";
import { Card, CardTitle, Col, Row } from "reactstrap";
import { GetGroupCompetitions } from "../API/WiseOldManApi";
import welcomeBanner from "../Images/welcome-banner.png";
import { ICompetitions } from "../Interfaces/ICompetition";

/**
 * Render component for the home page.
 */
function Home() {
  const [ongoingCompetitions, setOngoingCompetitions] = useState<ICompetitions[]>([]);
  const [pastCompetitions, setPastCompetitions] = useState<ICompetitions[]>([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      const data = await GetGroupCompetitions();

      setOngoingCompetitions(data.filter((x) => new Date(x.endsAt) > new Date()));
      setPastCompetitions(data.filter((x) => new Date(x.endsAt) < new Date()));
    };

    fetchCompetitions();
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
      <Row>
        <Col style={{ textAlign: "center" }}>
          <legend style={{ color: "#FFF" }}>
            Welcome to OS Paradise!{" "}
            <span role="img" aria-label="smiling face with hearts">
              🥰
            </span>
          </legend>
          <img src={welcomeBanner} alt="welcome banner" />
        </Col>
        <Col>
          <legend style={{ textAlign: "left", color: "#FFF" }}>
            Ongoing Competitions{" "}
            <span role="img" aria-label="eyes">
              👀
            </span>
          </legend>
          {ongoingCompetitions &&
            ongoingCompetitions.map((value) => (
              <Row key={value.id}>
                <Card body inverse style={{ backgroundColor: "#40444b", borderColor: "#333" }}>
                  <CardTitle tag="h5" style={{ color: "#FFF" }}>
                    {value.title}
                  </CardTitle>
                  <img src={`https://wiseoldman.net/img/runescape/icons/${value.metric}.png`} width="26px" alt={value.metric} />
                </Card>
              </Row>
            ))}
          <legend style={{ textAlign: "left", color: "#FFF", paddingTop: "20px" }}>
            Previous Competitions{" "}
            <span role="img" aria-label="smiling face with sunglasses">
              😎
            </span>
          </legend>
          {pastCompetitions &&
            pastCompetitions.map((value) => (
              <Row key={value.id}>
                <Card body inverse style={{ backgroundColor: "#40444b", borderColor: "#333" }}>
                  <CardTitle tag="h5" style={{ color: "#FFF" }}>
                    {value.title}
                  </CardTitle>
                  <img src={`https://wiseoldman.net/img/runescape/icons/${value.metric}.png`} width="26px" alt={value.metric} />
                </Card>
              </Row>
            ))}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
