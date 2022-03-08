import React, { useState } from "react";
import { Table } from "react-bootstrap";

function LineupCard({ lineups, playerDeet, viewStats }) {
  let styleA = {
    display: "flex",
    flexDirection: "column",
    alignItems: "right",
    justifyContent: "right",
    width: "40%",
    paddingRight: "2%",
  };
  let styleB = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width:'50%'
  };

  const players = playerDeet.map((player, i) => {
    return (
      <Table striped bordered hover size="sm" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ width: "10%" }}>{i + 1}</td>
            <td style={{ textAlign: "center" }}>
              <strong>
                {player.name_display_first_last}, {player.position}
              </strong>
            </td>
          </tr>
        </tbody>
      </Table>

      // !!!! SETUP FOR .PNG BACKGROUND
      // <p style={{height: '5.3%', paddingTop:'20px'}}>
      //   {player.name_display_first_last}, {player.position}
      // </p>
    );
  });

  return (
    <div style={viewStats ? styleA : styleB}>{players}</div>

    // !!!! SETUP FOR .PNG BACKGROUND
    //   <div
    //     style={{
    //       display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center",
    //       backgroundSize: "33%",
    //     }}
    //   >
    //     <div style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           width:'33%',
    //           height:'45vw'}}>
    //     {players}
    //   </div>
    // </div>
  );
}
export default LineupCard;
