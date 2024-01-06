import React from "react";
import { useContext } from "react";
import { Appcontext } from "../MyContext";

const weekStart = new Date("2023-11-19").toDateString();
const weekEnd = new Date("2023-11-25").toDateString();

const Fixtures = () => {
  const { match } = useContext(Appcontext);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto bg-dark fix p-4 text-center">
            <h1 className="fixtures text-primary">Fixtures for the week</h1>
            <h4 className="date text-white">{`${weekStart} - ${weekEnd}`}</h4>
          </div>

          <div>
            {match.map((match) => (
              <div key={match.ticketNo} className="mt-4">
                <span className="text-primary">{match.ticketNo}.</span>
                <span className="text-dark mb-4">
                  {match.teamA} {match.scoreA} Vs {match.scoreB} {match.teamB}
                </span>
                <div className="mt-2">
                  <p>Date: {match.date}</p>
                  <p>Time: {match.time}</p>
                  <p>Stadium: {match.stadium}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fixtures;
