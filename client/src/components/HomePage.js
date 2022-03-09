import React from "react";
import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <div className="hero-img" style={{ width: "100%", margin: "auto" }}>
      <div className="overlay" style={{textAlign:'center'}}>
          <div style={{display:'flex', justifyContent:'space-between', paddingLeft:'13%', paddingRight:'13%', alignItems:'center', height:'30vw'}}>
          <Card style={{ width: "25rem",backgroundColor: 'rgb(252, 241, 210)'
}}>
            <Card.Body style={{color:'black'}}>
              <Card.Title><strong>At-Bat Simulator</strong></Card.Title>
              <Card.Text>
                Take any batter from any era, and simulate their results against any pitcher!
              </Card.Text>
              <Card.Link href="/simmer">Start Simmin'</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem",backgroundColor: 'rgb(252, 241, 210)' }}>
            <Card.Body style={{color:'black'}}>
              <Card.Title><strong>Lineup Creator</strong></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/mylineups">Build a New Lineup</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "25rem",backgroundColor: 'rgb(252, 241, 210)' }}>
            <Card.Body style={{color:'black'}}>
              <Card.Title><strong>Community Lineups</strong></Card.Title>
              <Card.Text>
                View lineups that other users have created to see how they stack up to yours.
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
