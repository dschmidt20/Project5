import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import{ Button }from 'react-bootstrap'

function LineupMaker({ user, hitters }) {
  const c =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "C")
      : hitters;
  const first =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "1B")
      : hitters;
  const second =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "2B")
      : hitters;
  const third =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "3B")
      : hitters;
  const short =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "SS")
      : hitters;
  const left =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "LF")
      : hitters;
  const center =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "CF")
      : hitters;
  const right =
    hitters.length > 1
      ? hitters.filter((hitter) => hitter.position === "RF")
      : hitters;
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(true);
  const [fq, setfQ] = useState("");
  const [secq, setsecQ] = useState("");
  const [thq, setthQ] = useState("");
  const [ssq, setssQ] = useState("");
  const [lq, setlQ] = useState("");
  const [cfq, setcfQ] = useState("");
  const [rq, setrQ] = useState("");
  const [cq, setcQ] = useState("");
  const navigate = useNavigate();
  const [newLineup, setNewLineup] = useState({
    catcher_id: 0,
    first_id: 0,
    second_id: 0,
    third_id: 0,
    short_id: 0,
    left_id: 0,
    center_id: 0,
    right_id: 0,
    user_id: user.id,
  });
  function handleSubmit() {
    const submittedLineup = {
      ...newLineup,
    };

    fetch("/lineups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedLineup),
    }).then((r) => {
      if (r.ok) {
        r.json().then((submittedLineup) => {
          alert('lineup recieved successfully!')
          navigate("/home");
        });
      } else {
        r.json().then((err) => console.log(err.errors)); //finish error handling
      }
    });
  }
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url('https://cdn.pixabay.com/photo/2018/10/28/13/22/baseball-3778774_960_720.png')`,
          backgroundRepeat:'no-repeat',
          backgroundPosition: 'center',
          backgroundSize:'55%'
        }}
      >
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width:'33%',
            height:'45vw'

          }}
        >
          <div style={{height:'15vw'}}>
          
          <Dropdown
            options={left}
            q={lq}
            setQ={setlQ}
            onChange={(val) => {
              setNewLineup({ ...newLineup, left_id: val.player_id });
            }}
            prompt="LF..."
          /></div>
          <div>
          <Dropdown
            options={third}
            q={thq}
            setQ={setthQ}
            onChange={(val) => {
              setNewLineup({ ...newLineup, third_id: val.player_id });
            }}
            prompt="3B..."
          />
          </div>
          </div>
          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height:'40vw'

            }}
          >
            <Dropdown
              options={center}
              q={cfq}
              setQ={setcfQ}
              onChange={(val) => {
                setNewLineup({ ...newLineup, center_id: val.player_id });
              }}
              prompt="CF..."
            />
            <div
              style={{
                paddingTop: "15px",
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height:'30vw'

              }}
            >
            <Dropdown
              options={short}
              q={ssq}
              setQ={setssQ}
              onChange={(val) => {
                setNewLineup({ ...newLineup, short_id: val.player_id });
              }}
              prompt="SS..."
            /><div style={{padding:'15px'}}>    </div>
            <Dropdown
              options={second}
              q={secq}
              setQ={setsecQ}
              onChange={(val) => {
                setNewLineup({ ...newLineup, second_id: val.player_id });
              }}
              prompt="2B..."
            />
          </div>
          <Dropdown
            options={c}
            q={cq}
            setQ={setcQ}
            onChange={(val) => {
              setNewLineup({ ...newLineup, catcher_id: val.player_id });
            }}
            prompt="C..."
          />
        </div>
        <div
          style={{
            paddingTop: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height:'30vw'
          }}
        >
      <div style={{height:'15vw'}}>

          <Dropdown
            options={right}
            q={rq}
            setQ={setrQ}
            onChange={(val) => {
              setNewLineup({ ...newLineup, right_id: val.player_id });
            }}
            prompt="RF..."
          />
          </div>
          <Dropdown
            options={first}
            q={fq}
            setQ={setfQ}
            onChange={(val) => {
              setNewLineup({ ...newLineup, first_id: val.player_id });
            }}
            prompt="1B..."
          />
        </div>

      </div>
        <div style={{paddingBottom:'30px'}}>
          <Button variant='warning' style={{border:'1px solid black'}} onClick={handleSubmit}>Submit Lineup</Button>
        </div>
      </div>
    );
  }
}

export default LineupMaker;
