import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LineupCard from "./LineupCard";
import { Button, Table } from "react-bootstrap";

function MyLineups({ user, hitters }) {
  const [playerDeet, setPlayerDeet] = useState([]);
  const [displayedLineup, setDisplayedLineup] = useState([]);
  const navigate = useNavigate();
  const [showLineup, setShowLineup] = useState(false);
  const [ab, setAb] = useState(0);
  const [h, setH] = useState(0);
  const [hr, setHr] = useState(0);
  const [bb, setBb] = useState(0);
  const [d, setD] = useState(0);
  const [t, setT] = useState(0);
  const [rbi, setRbi] = useState(0);
  const [sf, setSf] = useState(0);
  const [viewStats, setViewStats] = useState(false);
  const [loadedStats, setLoadedStats] = useState(false);
  let style = viewStats ? "50%" : "75%";

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
  function handleNav() {
    navigate("/lineupmaker");
  }

  function handleDisplayedLineup(e) {
    fetch(`/lineups/${e.target.id}`).then((response) => {
      if (response.ok) {
        response.json().then((user) => setDisplayedLineup(user));
      }
    });
  }
  function mappedLineupButtons() {
    if (!!user.lineups) {
      return user.lineups.map((lineup, i) => (
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
            setH(0);
            setBb(0);
            setD(0);
            setT(0);
            setRbi(0);
            setSf(0);
          }}
          style={{color:'black'}}
        >
          Lineup #{i + 1}
        </Button>
      ));
    }
  }

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showLineup ? (
        <h1
          style={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textDecorationLine: "underline",
          }}
        >
          Current Lineup
        </h1>
      ) : (
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
          Click a button to see the corresponding lineup!
        </h1>
      )}
      <div
        style={{
          margin: "auto",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: style,
        }}
      >
        <LineupCard
          playerDeet={playerDeet}
          viewStats={viewStats}
          displayedLineup={displayedLineup}
        />
        {viewStats ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
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
                  <td>avg</td>
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
                  <td>Hits</td>
                  <td>{loadedStats ? h.toLocaleString() : "calculating..."}</td>
                  <td>
                    {loadedStats
                      ? ((h / 22454) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>hr</td>
                  <td>{loadedStats ? hr.toLocaleString() : "calculating..."}</td>
                  <td>
                    {loadedStats
                      ? ((hr / 3968) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>rbi</td>
                  <td>{loadedStats ? rbi.toLocaleString() : "calculating..."}</td>
                  <td>
                    {loadedStats
                      ? ((rbi / 14394) * 100).toFixed(1) + "%"
                      : "calculating..."}
                  </td>
                </tr>
                <tr>
                  <td>obp</td>
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
                  <td>slg</td>
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
        )}
      </div>{ showLineup && <Button
          style={{ backgroundColor: "rgb(255, 187, 2)" }}
          variant="light"
          className="m-1"
          onClick={() => setViewStats(!viewStats)}
        >
          <strong>View this lineups' stats</strong>
        </Button>}
      <div
        style={{
          margin: "auto",
          display: "flex",
          // flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
          flexWrap: "wrap",
        }}
      >
        {mappedLineupButtons()}
        
      </div>
        <Button
          style={{ backgroundColor: "rgb(255, 187, 2)" }}
          variant="light"
          className="m-1"
          onClick={handleNav}
        >
          <strong>Make a new Lineup!</strong>
        </Button>
    </div>
  );
}

export default MyLineups;
// function renderLineup() {
//   let arr = []
//   if (!!user.lineups) {
//    user.lineups.map((p) => {
//      for (let l in p){
//       //  console.log('l:',l)
//       // console.log('p:',p)
//       // console.log(p[l])
//        fetch(
//         `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${p[l]}'`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         },
//         []
//       ).then((response) => {
//         // if (response.ok) {
//           // console.log('response:', response)
//           response
//             .json()
//             .then((r) => {
//               // console.log('r.json: ', r)
//               arr.push({name: r.player_info.queryResults.row.name_display_first_last, position: r.player_info.queryResults.row.primary_position_txt })})
//         // }
//       });
//      setPlayerDeet(arr)
//    }}
//     );
//   }
//   console.log(playerDeet)
// }

// !!!! WORKING BACKEND FETCH
// function renderLineup() {
//   let arr = [];
//   if (!!displayedLineup) {
//     for (let p in displayedLineup) {
//       fetch(
//         `names/${displayedLineup[p]}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         },
//         []
//       ).then((response) => {
//         if (response.ok) {
//           response.json().then((r) => {
//             arr.push({
//               name: r.player_info.queryResults.row.name_first,
//               position: r.player_info.queryResults.row,
//             });
//           });
//         }
//       });
//       setPlayerDeet(arr);
//     }
//   }
//   console.log(playerDeet);
// }

// function renderLineups() {
//   console.log(user.lineups);
//   const array = []

//   if (user.lineups) user.lineups.map((lineup) => {
//     for (const l in lineup){
//       fetch(`http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${lineup[l]}'`, {
//               "method": "GET",
//               "headers": {
//                 "Content-Type": "application/json",
//               }
//             }, [])
//             .then(response => response.json())
//             .then((r) => {
//               // setPlayerDeet(r.player_info.queryResults.row.name_display_first_last)
//               array.push(r.player_info.queryResults.row.name_display_first_last)
//             }
//              ) }})
//   console.log(array)
//   array.map((a) => {
//     return <p>{a}</p>
//   })
// }

// const mappedLineupButtons = !!user.lineups
//   ? user.lineups.map((lineup) => {
//     const array = []
//       for (const p in lineup) {
//         fetch(
//           `http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='${lineup[p]}'`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           },
//           []
//         )
//           .then((response) => response.json())
//           .then((r) =>
//             console.log(r.player_info.queryResults.row.name_display_first_last)
//           )
//           }
//           (console.log(array))
//           // setPlayerDeet(array)
//     })
//   : null;
// return (<p>{playerDeet}</p>)
// .catch(err => {
//   console.error(err);
// }setPlayerDeet('')}) : null
