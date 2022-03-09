import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import LineupMaker from "./components/LineupMaker";
import MyLineups from "./components/MyLineups";
import AtBatSim from "./components/AtBatSim";
import CommunityLineups from "./components/CommunityLineups";
import "./index.css";


function App() {
  // const [searchParam, setSearchParam] = useState('')
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState({});
const playersAPI = '/players'
console.log(players)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

//   useEffect(() => {
//     fetch("https://mlb-data.p.rapidapi.com/json/named.player_info.bam?sport_code='mlb'&player_id='592789'", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "mlb-data.p.rapidapi.com",
// 		"x-rapidapi-key": process.env.REACT_APP_API_KEY
// 	}
// })
// .then(response => response.json()).then(r => console.log(r))
// .catch(err => {
// 	console.error(err);
// })
//   }, []);


  //!!!! FUNCTIONING BACKEND FETCH

  // useEffect(() => {
  //   fetch(playersAPI).then(response => response.json())
  //   .then(players => setPlayers(players.search_player_all.queryResults.row))
  // }, [])


  // !!!! FUNCTIONING FRONT ENd PLAYERS FETCH

  useEffect(() => {
    fetch(
      "https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?name_part='%25'&sport_code='mlb'",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "mlb-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      },
      []
    )
      .then((response) => response.json())
      .then((r) => setPlayers(r.search_player_all.queryResults.row))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  


  // useEffect(() => {
  //   fetch("https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?name_part='tatis%25'&sport_code='mlb'", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "mlb-data.p.rapidapi.com",
  //       "x-rapidapi-key": process.env.REACT_APP_API_KEY
  //     }
  //   }, [])
  //   .then(response => response.json())
  //   .then(r => console.log(r.search_player_all.queryResults.row))
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }, []);

  const hitters =
    players.length > 1
      ? players.filter((hitter) => hitter.position !== "P")
      : players;
  const pitchers =
    players.length > 1
      ? players.filter((hitter) => hitter.position === "P")
      : players;

  // console.log(hitters)
  // function displayedHitters(serchResults) {

  // }
  // if (!user) return <LoginPage user={user} setUser={setUser} />

  return (
    <div className="App" style={{width:'100%'}}>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/lineupmaker"
          element={
            <LineupMaker hitters={hitters} user={user} players={players} />
          }
        />
        <Route path="/communitylineups" element={<CommunityLineups currentUser={user} hitters={hitters} />} />
        <Route path="/mylineups" element={<MyLineups user={user} hitters={hitters} />} />
        <Route path="/simmer" element={<AtBatSim hitters={hitters} pitchers={pitchers}/>} />
        <Route path="/home" element={<HomePage user={user} />} />
        <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
