import React from "react";
import { Table } from "react-bootstrap";

function PitcherStatTable({ pitcher, styleA, styleB, styleC }) {
  function pAvgGrade() {
      if (pitcher.avg < 0.2) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (pitcher.avg < 0.22) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (pitcher.avg < 0.245) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (pitcher.avg < 0.26) {
      return <td>C</td>;
    } else if (pitcher.avg <= 0.29) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (pitcher.avg > 0.29) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function pKGrade() {
    if (pitcher.k9 > 10) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (pitcher.k9 > 8.5) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (pitcher.k9 > 7) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (pitcher.k9 > 5.5) {
      return <td>C</td>;
    } else if (pitcher.k9 > 4.75) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (pitcher.k9 < 4.75) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function pBbGrade() {
    if (pitcher.bb9 < 2) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (pitcher.bb9 < 2.3) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (pitcher.bb9 < 2.7) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (pitcher.bb9 < 3.2) {
      return <td>C</td>;
    } else if (pitcher.bb9 < 4) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (pitcher.bb9 > 4) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function pHrGrade() {
    if (pitcher.hr9 < 0.2) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (pitcher.hr9 < .42) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (pitcher.hr9 < 1) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (pitcher.hr9 < 1.5) {
      return <td>C</td>;
    } else if (pitcher.hr9 < 2) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (pitcher.hr9 > 2) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  function pH9Grade() {
    if (pitcher.h9 < 7) {
      return <td style={{ color: "green" }}>A++</td>;
    } else if (pitcher.h9 < 7.5) {
      return <td style={{ color: "green" }}>A</td>;
    } else if (pitcher.h9 < 8) {
      return <td style={{ color: "green" }}>B</td>;
    } else if (pitcher.h9 < 8.7) {
      return <td>C</td>;
    } else if (pitcher.h9 < 9.3) {
      return <td style={{ color: "red" }}>D</td>;
    } else if (pitcher.h9 >=9.3) {
      return <td style={{ color: "red" }}>F</td>;
    }
  }
  return (
    <div style={{marginRight:'auto'}}>
      <Table striped bordered hover style={styleA } size='sm'>
        <thead>
          <tr>
            <th style={styleC}>Stat Type</th>
            <th style={styleB}>{pitcher.name}</th>
            <th style={styleC}>Stat Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>opp avg</td>
            <td>{pitcher.avg}</td>
            <td>{pAvgGrade()}</td>
          </tr>
          <tr>
            <td>k/9</td>
            <td>{pitcher.k9}</td>
            <td>{pKGrade()}</td>
          </tr>
          <tr>
            <td>bb/9</td>
            <td>{pitcher.bb9}</td>
            <td>{pBbGrade()}</td>
          </tr>
          <tr>
            <td>hr/9</td>
            <td>{pitcher.hr9}</td>
            <td>{pHrGrade()}</td>
          </tr>
          <tr>
            <td>h/9</td>
            <td>{pitcher.h9}</td>
            <td>{pH9Grade()}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PitcherStatTable;
