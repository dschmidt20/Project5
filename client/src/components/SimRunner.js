import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

function SimRunner({ hitter, pitcher, styleA, styleB, styleC, playersChosen, setPlayersChosen, setHitter, setPitcher, simStarted, setSimStarted, nowSimming, setNowSimming }) {
  const [abs, setAbs] = useState(0);
  const [bbs, setBbs] = useState(0);
  const [ks, setKs] = useState(0);
  const [singles, setSingles] = useState(0);
  const [triples, setTriples] = useState(0);
  const [doubles, setDoubles] = useState(0);
  const [dingers, setDingers] = useState(0);
  const arr = [];
  const hPAs = +hitter.pa - +hitter.sf - +hitter.sac - +hitter.roe;
  const pPas = +pitcher.ab - +pitcher.sac - +pitcher.sf;
  const hHitsPerThou = hitter.avg * 10000;
  const hDingersPerThou = Math.ceil(10000 / (hPAs / hitter.hr));
  const hDoublePerThou = Math.ceil(10000 / (hPAs / hitter.d));
  const hTriplePerThou = Math.ceil(10000 / (hPAs / hitter.t));
  const hKsPerThou = Math.ceil(10000 / (hPAs / hitter.k));
  const hBbsPerThou = Math.ceil(10000 / (+hPAs / hitter.bb));
  const pHitsPerThou = pitcher.avg * 10000;
  const pDingersPerThou = Math.ceil(10000 / (pPas / pitcher.hr));
  const pDoublesPerThou = Math.ceil(10000 / (pPas / pitcher.db));
  const pTriplesPerThou = Math.ceil(10000 / (pPas / pitcher.tr));
  const pKsPerThou = Math.ceil(10000 / (pPas / pitcher.so));
  const pBbsPerThou = Math.ceil(10000 / (pPas / pitcher.bb));
  console.log(hDingersPerThou, pDingersPerThou, hPAs);
  function fillArr() {
    let i = 0;
    let j = 0;
    let w = 0;
    let x = 0;
    let y = 0;
    let z = 0;
    let b = 0;
    let a = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    let g = 0;
    let h = 0;
    let k = 0;
    while (i < 10000 - hHitsPerThou - hKsPerThou - hBbsPerThou) {
      arr.push("0");
      i++;
    }
    while (j < hDingersPerThou) {
      arr.push("4");
      j++;
    }
    while (
      x <
      hHitsPerThou - hDingersPerThou - hDoublePerThou - hTriplePerThou - 320
    ) {
      arr.push("1");
      x++;
    }
    while (y < hDoublePerThou) {
      arr.push("2");
      y++;
    }
    while (w < hTriplePerThou) {
      arr.push("3");
      w++;
    }
    while (z < hKsPerThou) {
      arr.push("5");
      z++;
    }
    while (b < hBbsPerThou) {
      arr.push("6");
      b++;
    }
    while (c < 10000 - pHitsPerThou - pKsPerThou - pBbsPerThou) {
      arr.push("0");
      c++;
    }
    while (
      a <
      pHitsPerThou - pDingersPerThou - pDoublesPerThou - pTriplesPerThou - 160
    ) {
      arr.push("1");
      a++;
    }
    while (d < pDingersPerThou) {
      arr.push("4");
      d++;
    }
    while (e < pDoublesPerThou) {
      arr.push("2");
      e++;
    }
    while (f < pTriplesPerThou) {
      arr.push("3");
      f++;
    }
    while (g < pKsPerThou) {
      arr.push("5");
      g++;
    }
    while (h < pBbsPerThou) {
      arr.push("6");
      h++;
    }
    while (k < 320) {
      arr.push("7");
      k++;
    }
  }
  fillArr();
  function runSim(num) {
    let i = 0;
    while (i < num) {
      const randomElement = arr[Math.floor(Math.random() * arr.length)];
      randomElement !== "6" && setAbs((abs) => abs + 1);
      if (randomElement === "1") {
        setSingles((singles) => singles + 1);
      } else if (randomElement === "2") {
        setDoubles((doubles) => doubles + 1);
      } else if (randomElement === "3") {
        setTriples((triples) => triples + 1);
      } else if (randomElement === "4") {
        setDingers((dingers) => dingers + 1);
      } else if (randomElement === "5") {
        setKs((ks) => ks + 1);
      } else if (randomElement === "6") {
        setBbs((bbs) => bbs + 1);
        //   } else if (randomElement === "7") {
        //     console.log(7);
      }
      i++;
    }
  }

  return (
    <div
      style={{
        paddingTop: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Table striped bordered hover style={styleA} size="sm">
        <thead>
          <tr>
            <th style={styleC}></th>
            <th style={styleB}>
              {hitter.name} vs. {pitcher.name}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>results</td>
            <td>
              {singles + doubles + triples + dingers}/{abs}
            </td>
          </tr>
          <tr>
            <td>HR</td>
            <td>{dingers}</td>
          </tr>
          <tr>
            <td>bb</td>
            <td>{bbs}</td>
          </tr>
          <tr>
            <td>k's</td>
            <td>{ks}</td>
          </tr>
          <tr>
            <td>avg</td>
            <td>
              {abs
                ? ((singles + doubles + triples + dingers) / abs).toFixed(3)
                : 0.0}
            </td>
          </tr>
          <tr>
            <td>obp</td>
            <td>
              {abs
                ? (
                    (singles + doubles + triples + dingers + bbs) /
                    (abs + bbs)
                  ).toFixed(3)
                : 0.0}
            </td>
          </tr>
          <tr>
            <td>slg</td>
            <td>
              {abs
                ? +(
                    (dingers * 4 + triples * 3 + doubles * 2 + singles) /
                    abs
                  ).toFixed(3)
                : 0.0}
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" onClick={() => runSim(1)}>Run The Simulation 1x!</Button>
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" onClick={() => runSim(10)}>Run The Simulation 10x!</Button>
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" onClick={() => runSim(100)}>Run The Simulation 100x!</Button>
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" onClick={() => runSim(1000)}>Run The Simulation 1000x!</Button>
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" onClick={() => runSim(+hitter.ab + +hitter.bb)}>
        Re-Sim Their Career
      </Button>
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" 
        onClick={() => {
          setAbs(0);
          setBbs(0);
          setDingers(0);
          setSingles(0);
          setDoubles(0);
          setTriples(0);
          setKs(0);
        }}
      >
        Restart The Simulation
      </Button>
      <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} className="m-1" 
        onClick={() => {
        //   setPlayersChosen(!playersChosen);
          setSimStarted(!simStarted);
          setHitter({})
          setPitcher({})
          setAbs(0);
          setBbs(0);
          setDingers(0);
          setSingles(0);
          setDoubles(0);
          setTriples(0);
          setKs(0);
          setNowSimming(!nowSimming)
        }}
      >
        Choose Different Players
      </Button>
    </div>
  );
}

export default SimRunner;
