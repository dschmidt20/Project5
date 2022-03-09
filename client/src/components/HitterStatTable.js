import React from "react";
import Table from "react-bootstrap/Table";

function StatTables({ hitter, styleA, styleB, styleC }) {
  function hHrGrade() {
    if (
      (hitter.ab / hitter.hr <= 14 && hitter.ab > 1000) ||
      hitter.hr >= 700
    ) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (
      (hitter.ab / hitter.hr <= 19 && hitter.ab > 500) ||
      hitter.hr >= 600
    ) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (hitter.ab / hitter.hr <= 22.5 || hitter.hr >= 500) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (hitter.ab / hitter.hr <= 26 || hitter.hr >= 400) {
      return <td>C</td>;
    } else if (hitter.ab / hitter.hr <= 34 || hitter.hr >= 300) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (hitter.ab / hitter.hr > 34) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function hAvgGrade() {
    if (hitter.avg >= 0.333 || hitter.h >= 3500) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (hitter.avg >= 0.3 || hitter.h >= 3000) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (hitter.avg >= 0.28 || hitter.h >= 2500) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (hitter.avg >= 0.26 || hitter.h >= 2000) {
      return <td>C</td>;
    } else if (hitter.avg >= 0.23 || hitter.h >= 1500) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (hitter.avg < 0.23 || hitter.h >= 1000) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function hKGrade() {
    if (hitter.ab / hitter.k > 20) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (hitter.ab / hitter.k > 14) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (hitter.ab / hitter.k > 10) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (hitter.ab / hitter.k > 7) {
      return <td>C</td>;
    } else if (hitter.ab / hitter.k >= 4) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (hitter.ab / hitter.k < 4) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function hSlgGrade() {
    if (hitter.slg > 0.6) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (hitter.slg > 0.55) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (hitter.slg > 0.5) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (hitter.slg > 0.41) {
      return <td>C</td>;
    } else if (hitter.slg >= 0.355) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (hitter.slg < 0.355) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function hObpGrade() {
    if (hitter.obp > 0.42) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (hitter.obp > 0.4) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (hitter.obp > 0.375) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (hitter.obp > 0.325) {
      return <td>C</td>;
    } else if (hitter.obp >= 0.30) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (hitter.obp < 0.30) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }

  return (
    <div style={{marginLeft:'auto', width:'40%'}}>
      <Table
        striped
        bordered
        hover
        style={styleA}
        size='sm'
      >
        <thead>
          <tr>
            <th style={styleC}>Stat Type</th>
            <th style={styleB}>{hitter.name}</th>
            <th style={styleC}>Stat Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>avg</td>
            <td>{hitter.avg}</td>
            <td>{hAvgGrade()}</td>
          </tr>
          <tr>
            <td>hr</td>
            <td>{(+hitter.hr).toLocaleString()}</td>
            {hHrGrade()}
          </tr>
         
          <tr>
            <td>k's</td>
            <td>{(+hitter.k).toLocaleString()}</td>
            <td>{hKGrade()}</td>
          </tr>
          <tr>
            <td>bbs</td>
            <td>{(+hitter.bb).toLocaleString()}</td>
            <td>{hKGrade()}</td>
          </tr>
         
          
          <tr>
            <td>slg</td>
            <td>{hitter.slg}</td>
            <td>{hSlgGrade()}</td>
          </tr>
          <tr>
            <td>obp</td>
            <td>{hitter.obp}</td>
            <td>{hObpGrade()}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default StatTables;
