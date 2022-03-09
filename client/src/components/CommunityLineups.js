import React, { useState, useRef, useEffect } from "react";
import Dropdown from "./dropdown/Dropdown";
import Moment from "moment";
import { Button, Table } from "react-bootstrap";
import LineupCard from "./LineupCard";

function CommunityLineups({ currentUser, hitters }) {
  const [playerDeet, setPlayerDeet] = useState([]);
  const [viewStats, setViewStats] = useState(false);
  const [otherUserSelected, setOtherUserSelected] =useState(false)
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState(null);
  const ref = useRef(null);
  const [userID, setUserID] = useState(0);
  const [otherUser, setOtherUser] = useState({});
  const [allUsers, setAllUsers] = useState({});
  const [mappedUsers, setMappedUsers] = useState({});
  const [userSearch, setUserSearch] = useState("");
  const [pa, setPa] = useState(0);
  const [ab, setAb] = useState(0);
  const [h, setH] = useState(0);
  const [hr, setHr] = useState(0);
  const [bb, setBb] = useState(0);
  const [d, setD] = useState(0);
  const [t, setT] = useState(0);
  const [rbi, setRbi] = useState(0);
  const [sf, setSf] = useState(0);
  const [loadedStats, setLoadedStats] = useState(false);
  const [showLineup, setShowLineup] = useState(false);
  const [displayedLineup, setDisplayedLineup] = useState([]);

  function handleDisplayedLineup(e) {
    fetch(`/lineups/${e.target.id}`).then((response) => {
      if (response.ok) {
        response.json().then((user) => setDisplayedLineup(user));
      }
    });
  }
  function handleLineupStats() {
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.catcher_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.first_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.second_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.third_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.short_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.left_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.center_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          console.log(r);
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    fetch(
      `https://mlb-data.p.rapidapi.com/json/named.sport_career_hitting.bam?player_id='${displayedLineup.right_id}'&game_type='R'&league_list_id='mlb'`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    ).then((response) => {
      if (response.ok) {
        response.json().then((r) => {
          setPa((pa) => pa + +r.sport_career_hitting.queryResults.row.tpa);
          setAb((ab) => ab + +r.sport_career_hitting.queryResults.row.ab);
          setH((h) => h + +r.sport_career_hitting.queryResults.row.h);
          setHr((hr) => hr + +r.sport_career_hitting.queryResults.row.hr);
          setD((hr) => hr + +r.sport_career_hitting.queryResults.row.d);
          setT((hr) => hr + +r.sport_career_hitting.queryResults.row.t);
          setBb((hr) => hr + +r.sport_career_hitting.queryResults.row.bb);
          setSf((hr) => hr + +r.sport_career_hitting.queryResults.row.sf);
          setRbi((hr) => hr + +r.sport_career_hitting.queryResults.row.rbi);
        });
      }
    });
    setLoadedStats(true);
  }

  useEffect(() => {
    filterHitters();
    handleLineupStats();
  }, [displayedLineup]);
  function filterHitters() {
    setPlayerDeet(
      hitters.filter((hitter) => {
        return (
          +hitter.player_id === displayedLineup.catcher_id ||
          +hitter.player_id === displayedLineup.first_id ||
          +hitter.player_id === displayedLineup.second_id ||
          +hitter.player_id === displayedLineup.third_id ||
          +hitter.player_id === displayedLineup.short_id ||
          +hitter.player_id === displayedLineup.left_id ||
          +hitter.player_id === displayedLineup.center_id ||
          +hitter.player_id === displayedLineup.right_id
        );
      })
    );
  }
  console.log(currentUser);

  useEffect(() => {
    fetch("/users").then((response) => {
      if (response.ok) {
        response.json().then((user) => setAllUsers(user));
      }
    });
  }, []);

  function handleSubmit() {
    fetch(`/user/${userID}`).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log(user);
          setOtherUser({
            username: user.username,
            id: user.id,
            lineups: user.lineups,
          });
        });
      }
    });
    setOtherUserSelected(true)
    setShowLineup(false)
    console.log(otherUser);
  }

  console.log(showLineup)

  function mappedLineupButtons() {
    if (!!otherUser.lineups) {
      return otherUser.lineups.map((lineup, i) => (
        <Button
          variant="outline-warning"
          className="m-1"
          id={lineup.id}
          onClick={(e) => {
            handleDisplayedLineup(e);
            setShowLineup(true);
            setLoadedStats(false);
            setAb(0);
            setHr(0);
            setPa(0);
            setH(0);
            setBb(0);
            setD(0);
            setT(0);
            setRbi(0);
            setSf(0);
          }}
          style={{ color: "black" }}
        >
          Lineup #{i + 1}
        </Button>
      ));
    }
  }

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const handleChange = (val) => {
    // setOtherUserSelected(false)
    setOtherUser({ user: val.username });
  };
  console.log(userID);

  const filteredUsers = !!allUsers.length
    ? allUsers.filter((u) => u.username !== currentUser.username)
    : {};

  function displayValue() {
    if (userSearch.length > 0) return userSearch;
    if (choice) return choice;
    return "";
  }
  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // width: "33%",
        // height: "45vw",
      }}
    > {showLineup ? (<>
          <h1
            style={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecorationLine: "underline",
            }}
          >
            {`${otherUser.username}'s Lineup`}</h1>
           
          </>
        ) : (
          <>
            <h1
              style={{
                display: "flex",
                // flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textDecorationLine: "underline",
                height:'25vh'

              }}
            >
              {otherUserSelected
                ? `Click a button to see ${otherUser.username}'s lineups!`
                : `Use the search bar to find a friends' lineups!`}
            </h1>{" "}
          </>
        )}
      <div
        style={{
          margin: "auto",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width:'75%'
        }}
      >
       { showLineup ? <LineupCard
              playerDeet={playerDeet}
              viewStats={viewStats}
              displayedLineup={displayedLineup}
            /> : <></>}
        {viewStats ? (
          <div
            style={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "5%",
              width: "50%",
            }}
          >
            <Table striped bordered hover size="lg" style={{ width: "70%" }}>
              <thead>
                <tr>
                  <th>stat</th>
                  <th>totals</th>
                  <th>Comparison to "Best" Lineup</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ width: "2000%" }}>
                  <td>AVG</td>
                  <td>
                    {loadedStats ? (h / ab).toFixed(3) : "calculating..."}
                  </td>
                  <td>
                    {loadedStats
                      ? (((h / ab).toFixed(3) / 0.313) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr style={{ width: "2000%" }}>
                  <td>hits</td>
                  <td>{loadedStats ? h : "calculating..."}</td>
                  <td>
                    {loadedStats
                      ? ((h / 22454) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>hr</td>
                  <td>{loadedStats ? hr : "calculating..."}</td>
                  <td>
                    {loadedStats
                      ? ((hr / 3968) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>RBI</td>
                  <td>{loadedStats ? rbi : "calculating..."}</td>
                  <td>
                    {loadedStats
                      ? ((rbi / 14394) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>OBP</td>
                  <td>
                    {loadedStats
                      ? ((h + bb) / (ab + bb + sf)).toFixed(3)
                      : "calculating..."}
                  </td>
                  <td>
                    {loadedStats
                      ? (
                          (((h + bb) / (ab + bb + sf)).toFixed(3) / 0.41) *
                          100
                        ).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>SLG</td>
                  <td>
                    {loadedStats
                      ? (
                          (hr * 4 + t * 3 + d * 2 + (h - d - t - hr)) /
                          ab
                        ).toFixed(1)
                      : "calculating..."}
                  </td>
                  <td>
                    {loadedStats
                      ? (
                          ((hr * 4 + t * 3 + d * 2 + (h - d - t - hr)) /
                            ab /
                            0.565) *
                          100
                        ).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          <></>
        )} </div>
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: '50%',
          }}
        >
        </div>
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // width: style,
          }}
        >
        {showLineup && (
          <Button
            style={{ backgroundColor: "rgb(255, 187, 2)" }}
            variant="light"
            className="m-1"
            onClick={() => setViewStats(!viewStats)}
          >
            <strong>View this lineups' stats</strong>
          </Button>
        )}
        <div
          style={{
            margin: "auto",
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          {mappedLineupButtons()}
       
      </div>
      <div className="dropdown" style={{ width: 160 }}>
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">
            <input
              type="search"
              placeholder={`Select User...`}
              ref={ref}
              value={displayValue()}
              required
              style={{ width: 110, fontSize: "10pt" }}
              onChange={(e) => {
                setUserSearch(e.target.value);

                setOtherUser(e.target.value);
              }}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div
            className={`arrow ${open ? "open" : null}`}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {userSearch.length > 2 || choice
            ? filteredUsers
                .filter((p) =>
                  p.username.toLowerCase().includes(userSearch.toLowerCase())
                )
                .map((p) => (
                  <div
                    id={p.id}
                    className="option"
                    onClick={(p) => {
                      setUserSearch("");
                      
                      handleChange(p);
                      console.log(p.target.innerText)
                      setOpen(false);
                      setChoice(p.target.innerText);
                      setUserID(p.target.id);
                      setViewStats(false)
                      setShowLineup(false)
                      setOtherUserSelected(false)
                    }}
                    key={p.id}
                  >
                    {p.username}
                  </div>
                ))
            : "please enter at least 3 characters"}
          {/* options.map(option => <div className='option'>{option.name}</div>)
        } */}
        </div>
        </div>
      </div>
      <Button variant='warning' className='m-4' onClick={handleSubmit}>Search Their Lineups</Button>
    </div>
  );
}

export default CommunityLineups;
