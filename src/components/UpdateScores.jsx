import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useContext, useState } from "react";
import { Appcontext } from "../MyContext";
import Button from "react-bootstrap/Button";

function UpdateScores() {
  const { match, scoresA, scoresB, handleScoresA, handleScoresB } =
    useContext(Appcontext);
  const [teamA, setTeamA] = useState(JSON.parse(localStorage.getItem("teamA")));

  const [teamB, setTeamB] = useState(JSON.parse(localStorage.getItem("teamB")));

  const handleSelectA = (e) => setTeamA(e.target.value);
  const handleSelectB = (e) => setTeamB(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { teamA, teamB, scoresA, scoresB };
    updateScore();
    console.log(details);
  };
  const updateScore = () => {
    match.map((mat) => {
      if (mat.teamA === teamA && mat.teamB === teamB) {
        (mat.scoresA = scoresA), (mat.scoresB = scoresB);
      } else {
        return mat;
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("teamA", JSON.stringify(teamA));
  }, [teamA]);

  useEffect(() => {
    localStorage.setItem("teamB", JSON.stringify(teamB));
  }, [teamB]);
  return (
    <div className="container ">
      <div className="row">
        <h2 className="text-center">Update Scores</h2>
        <form onSubmit={handleSubmit}>
          <div className="col-6">
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelectA}
              value={teamA}
            >
              {match.map((teams) => (
                <option value={teams.teamA} key={teams.ticketNo}>
                  {teams.teamA}
                </option>
              ))}
            </Form.Select>
            <Form.Control
              type="number"
              placeholder="Input Scores"
              className="mt-3"
              value={scoresA}
              onChange={handleScoresA}
            />
          </div>
          <div className="col-6">
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelectB}
              value={teamB}
            >
              {match.map((teams) => (
                <option value={teams.teamB} key={teams.ticketNo}>
                  {teams.teamB}
                </option>
              ))}
            </Form.Select>
            <Form.Control
              type="number"
              placeholder="Input Scores"
              className="mt-3"
              value={scoresB}
              onChange={handleScoresB}
            />
          </div>
          <Button
            as="input"
            type="submit"
            value="Submit"
            style={{ width: "40%", margin: "0 auto" }}
            className="mt-3"
          />
        </form>
      </div>
    </div>
  );
}

export default UpdateScores;
