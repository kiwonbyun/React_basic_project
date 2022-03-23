import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FrontScore = (props) => {
  const [days, setDays] = useState(["일", "월", "화", "수", "목", "금", "토"]);
  const today = new Date().getDay();
  useEffect(() => {
    setDays((cur) => [...cur.slice(today, 7), ...cur.slice(0, today)]);
  }, []);
  console.log(days);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {days.map((v, i) => {
        let score = Math.ceil(Math.random() * 5);
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <span>{v}</span>
            <Circle
              style={score >= 1 ? { backgroundColor: "yellow" } : null}
            ></Circle>
            <Circle
              style={score >= 2 ? { backgroundColor: "yellow" } : null}
            ></Circle>
            <Circle
              style={score >= 3 ? { backgroundColor: "yellow" } : null}
            ></Circle>
            <Circle
              style={score >= 4 ? { backgroundColor: "yellow" } : null}
            ></Circle>
            <Circle
              style={score >= 5 ? { backgroundColor: "yellow" } : null}
            ></Circle>
            <Link to={`/review/${v}`}>
              <Triangle></Triangle>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
`;

const Triangle = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default FrontScore;
