import React from "react";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div className="hero-img" style={{ width: "100%", margin: "auto" }}>
      <div className="overlay" style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "13%",
            paddingRight: "13%",
            alignItems: "center",
            height: "30vw",
          }}
        >
          <Card
            style={{ width: "25rem", backgroundColor: "rgb(252, 241, 210)" }}
          >
            <Card.Body style={{ color: "black" }}>
              <Card.Title>
                <strong>At-Bat Simulator</strong>
              </Card.Title>
              <Card.Text>
                Take any batter from any era, and simulate their results against
                any pitcher!
              </Card.Text>
              <Card.Link href="/simmer">Start Simmin'</Card.Link>
            </Card.Body>
          </Card>
          <div>
            <Card
              style={{
                width: "25rem",
                marginBottom: "28%",
                backgroundColor: "rgb(252, 241, 210)",
              }}
            >
              <Card.Body style={{ color: "black" }}>
                <Card.Title>
                  <strong>My Lineups</strong>
                </Card.Title>
                <Card.Text>
                  View the lineups you've created, and how they stack up to the
                  All-Time greatest.{" "}
                </Card.Text>
                <Card.Link href="/mylineups">View My Lineups</Card.Link>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "25rem", backgroundColor: "rgb(252, 241, 210)" }}
            >
              <Card.Body style={{ color: "black" }}>
                <Card.Title>
                  <strong>Lineup Creator</strong>
                </Card.Title>
                <Card.Text>
                 Get creative and build a lineup using any of the nearly 10,000 batters in MLB history.
                </Card.Text>
                <Card.Link href="/lineupmaker">Build a New Lineup</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <Card
            style={{ width: "25rem", backgroundColor: "rgb(252, 241, 210)" }}
          >
            <Card.Body style={{ color: "black" }}>
              <Card.Title>
                <strong>Community Lineups</strong>
              </Card.Title>
              <Card.Text>
                View lineups that other users have created to see how they stack
                up to yours.
              </Card.Text>
              <Card.Link href="/communitylineups">See Other Lineups</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
