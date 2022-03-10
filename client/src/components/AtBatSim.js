import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import { Button } from "react-bootstrap";
import HitterStatTable from "./HitterStatTable";
import PitcherStatTable from "./PitcherStatTable";
import SimRunner from "./SimRunner";

function AtBatSim({ hitters, pitchers }) {
  const [simStarted, setSimStarted] = useState(true);
  const [simSelected, setSimSelected] = useState(false);
  const [hQ, setHq] = useState("");
  const [pQ, setPq] = useState("");
  const [hitter, setHitter] = useState([]);
  const [pitcher, setPitcher] = useState([]);
  const [playersChosen, setPlayersChosen] = useState(true);
  const [nowSimming, setNowSimming] = useState(false);
  console.log(hitters)

  function handleSubmit() {
    if(hitter.length === 0){
      alert('You must pick a hitter!')
    }else if (pitcher.length === 0){
    alert('You must pick a pitcher!')
    }else{
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${hitter.hitter_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key":
           process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setHitter({
            ...hitter,
            avg: r.sport_career_hitting.queryResults.row.avg,
            ab: r.sport_career_hitting.queryResults.row.ab,
            d: r.sport_career_hitting.queryResults.row.d,
            t: r.sport_career_hitting.queryResults.row.t,
            k: r.sport_career_hitting.queryResults.row.so,
            hr: r.sport_career_hitting.queryResults.row.hr,
            bb: r.sport_career_hitting.queryResults.row.bb,
            hbp: r.sport_career_hitting.queryResults.row.hbp,
            obp: r.sport_career_hitting.queryResults.row.obp,
            slg: r.sport_career_hitting.queryResults.row.slg,
            h: r.sport_career_hitting.queryResults.row.h,
            pa: r.sport_career_hitting.queryResults.row.tpa,
            ibb: r.sport_career_hitting.queryResults.row.ibb,
            sf: r.sport_career_hitting.queryResults.row.sf,
            sac: r.sport_career_hitting.queryResults.row.sac,
            roe: r.sport_career_hitting.queryResults.row.roe,
          });
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_pitching.bam?player_id='${pitcher.pitcher_id}'&league_list_id='mlb'&game_type='R'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key":
           process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          setPitcher({
            ...pitcher,
            h9: r.sport_career_pitching.queryResults.row.h9,
            kbb: r.sport_career_pitching.queryResults.row.kbb,
            hr9: r.sport_career_pitching.queryResults.row.hr9,
            avg: r.sport_career_pitching.queryResults.row.avg,
            k9: r.sport_career_pitching.queryResults.row.k9,
            bb9: r.sport_career_pitching.queryResults.row.bb9,
            ip: r.sport_career_pitching.queryResults.row.ip,
            hr: r.sport_career_pitching.queryResults.row.hr,
            ab: r.sport_career_pitching.queryResults.row.tbf,
            bb: r.sport_career_pitching.queryResults.row.bb,
            h: r.sport_career_pitching.queryResults.row.h,
            db: r.sport_career_pitching.queryResults.row.db,
            tr: r.sport_career_pitching.queryResults.row.tr,
            so: r.sport_career_pitching.queryResults.row.so,
            sf: r.sport_career_pitching.queryResults.row.sf,
            sac: r.sport_career_pitching.queryResults.row.sac,
            whip: r.sport_career_pitching.queryResults.row.whip
          });
        });
      }
    });
    setPlayersChosen(!playersChosen);
    setSimStarted(!simStarted);
  }

}

  return (
    <div
      style={{
        paddingTop: "15px",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        alignContent:'space-between'
        // justifyContent: "center",
      }}
    >
      {simSelected ? (
        <></>
      ) : (
        <div
          style={{
            paddingTop: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // height:'50vh'
          }}
        >
          <h1 style={{padding:'13px'}}>Welcome to the At Bat Simulator</h1>
          <h5 style={{padding:'13px'}}>
            Pick any pitcher to face off against any hitter, and simulate the
            results!
          </h5>
          <h6 style={{padding:'13px'}}>Click the button below to get started!</h6>
          <img
            src="https://www.fg-a.com/sports/baseball-umpire-1.gif"
            alt="ump"
          ></img>
          <span style={{ padding: "10px" }}>
            <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}}
              onClick={() => {
                setSimStarted(!simStarted);
                setSimSelected(!simSelected);
              }}
            >
              Get Started!
            </Button>
          </span>
        </div>
      )}
      {playersChosen ? (
        <></>
      ) : (
        <div>
          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <HitterStatTable
              hitter={hitter}
              styleA={{ width: "75%", margin: "auto", paddingTop: "15px" }}
              styleB={{ width: "40%", fontSize: "16pt" }}
              styleC={{ width: "20%" }}
            />
            <h2 style={{ margin: "auto" }}>VERSUS</h2>
            <PitcherStatTable
              pitcher={pitcher}
              styleA={{ width: "75%", margin: "auto", paddingTop: "15px" }}
              styleB={{ width: "40%", fontSize: "16pt" }}
              styleC={{ width: "20%" }}
            />
            <br />
          </div>{" "}
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              paddingTop:'10%'
            }}
          >
            <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}}
              onClick={() => {
                setNowSimming(!nowSimming);
                setPlayersChosen(!playersChosen);
              }}
            >
              Start The Simlation between {hitter.name} and {pitcher.name}
            </Button>{" "}
          </div>
        </div>
      )}
      {simStarted ? (
        <></>
      ) : (
        <div>
        <div style={{display: "flex"}}>
          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width:'50%',
              paddingLeft:'10%'
            }}
          >
            <h2>Choose your Hitter!</h2>
            <img
              src="https://www.fg-a.com/sports/animated-batter.gif"
              alt="hitterselect"
            ></img>
            <>
              <Dropdown
                options={hitters}
                q={hQ}
                setQ={setHq}
                onChange={(val) => {
                  setHitter({
                    hitter_id: val.player_id,
                    name: val.name_display_first_last,
                  });
                }}
                prompt="Hitter..."
              />{" "}
            </>
          </div>
          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width:'50%',
              paddingRight:'10%'
            }}
          >
            <div
              style={{
                paddingTop: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <h2>Choose your Pitcher!</h2>
              <img
                src="https://www.fg-a.com/sports/boy-playing-baseball.gif"
                alt="boy"
              ></img>
              <>
                <Dropdown
                  options={pitchers}
                  q={pQ}
                  setQ={setPq}
                  onChange={(val) => {
                    setPitcher({
                      pitcher_id: val.player_id,
                      name: val.name_display_first_last,
                    });
                  }}
                  prompt="Pitcher..."
                />
              </>
            </div>
          </div>
        </div>
            <div style={{paddingTop:'30px', display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
}}>
              <Button variant="light" style={{backgroundColor: 'rgb(255, 187, 2)'}} onClick={handleSubmit}>Select These Players</Button>
            </div>
            </div>
      )}
      {nowSimming && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // width:'175%'
            }}
          >
            {/* <img
              style={{ height: "200px" }}
              src="https://content.presentermedia.com/content/animsp/00011000/11747/baseball_swing_anim_300_wht.gif"
              alt="swing"
            ></img> */}

            <HitterStatTable
              hitter={hitter}
              styleA={{
                width: "70%",
                margin: "auto",
                paddingTop: "15px",
                // height: "5%",
              }}
              styleB={{ width: "40%", fontSize: "16pt" }}
              styleC={{ width: "20%" }}
            />
            <PitcherStatTable
              pitcher={pitcher}
              styleA={{ width: "70%", margin: "auto", paddingTop: "15px" }}
              styleB={{ width: "40%", fontSize: "16pt" }}
              styleC={{ width: "20%" }}
            />
            {/* <img
              style={{ height: "200px" }}
              src="https://i1.wp.com/www.winterhavenhs.com/wp-content/uploads/2018/07/www.animated-gifs.eu_.gif-6941222.gif"
              alt="pitcher"
            ></img> */}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SimRunner
              hitter={hitter}
              pitcher={pitcher}
              playersChosen={playersChosen}
              setPlayersChosen={setPlayersChosen}
              setHitter={setHitter}
              setPitcher={setPitcher}
              simStarted={simStarted}
              setSimStarted={setSimStarted}
              nowSimming={nowSimming}
              setNowSimming={setNowSimming}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default AtBatSim;
