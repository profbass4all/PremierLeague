import React, { useEffect } from "react";
import { useState } from "react";

export const Appcontext = React.createContext();

function MyContext({ children }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [scoresA, setScoresA] = useState("scoresA");
  const [scoresB, setScoresB] = useState("scoresB");

  const [match, setMatch] = useState([
    {
      teamA: "Fulham",
      teamB: "Aston Villa",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "1",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Luton Town",
      teamB: "Everton",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "2",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Manchester United",
      teamB: "Aston Villa",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "3",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Tottenham Hotspur",
      teamB: "Stoke city",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "4",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Manchester City",
      teamB: "Brentford",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "5",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Crystal Palace",
      teamB: "Newcastle United",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "6",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Aston Villa",
      teamB: "Brighton",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "7",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Westham United",
      teamB: "Brentford",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "8",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Wolverhampton",
      teamB: "Nottingham Forest",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "9",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Fulham",
      teamB: "Bournemouth",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "10",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Luton",
      teamB: "Sheffield United",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "11",
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: "Everton",
      teamB: "Burnley",
      stadium: "Santiago Bernabeu",
      date: "07/02/23",
      time: "02:09 PM",
      ticketNo: "12",
      scoreA: 0,
      scoreB: 0,
    },
  ]);

  useEffect(() => {
    localStorage.setItem("match", JSON.stringify(match));
  }, [match]);
  useEffect(() => {
    localStorage.setItem("scoresA", JSON.stringify(scoresA));
  }, [scoresA]);

  useEffect(() => {
    localStorage.setItem("scoresB", JSON.stringify(scoresB));
  }, [scoresB]);

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleLname = (e) => {
    setLname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleShow = () => {
    setShow(true);
    setShow2(false);
  };
  const handleShow2 = () => {
    setShow2(true);
    setShow(false);
  };
  const handleScoresA = (e) => setScoresA(e.target.value);
  const handleScoresB = (e) => setScoresB(e.target.value);
  let kla = show ? "heading" : "";
  let kla2 = show2 ? "heading" : "";

  return (
    <Appcontext.Provider
      value={{
        fname,
        handleFname,
        lname,
        handleLname,
        kla2,
        email,
        handleEmail,
        show,
        handleShow,
        show2,
        handleShow2,
        kla,
        match,
        scoresA,
        scoresB,
        handleScoresA,
        handleScoresB,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
}

export default MyContext;
