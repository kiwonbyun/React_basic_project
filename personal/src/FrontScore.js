import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FrontScore = (props) => {
  const sevenDays = ["월", "화", "수", "목", "금", "토", "일"];
  const history = useHistory();
  return (
    <>
      {sevenDays.map((v, i) => {
        const randomScore = Math.ceil(Math.random() * 5);
        return (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <p>{v}</p>
            <Circle
              style={
                randomScore > 0
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "rgb(221, 221, 221)" }
              }
            />
            <Circle
              style={
                randomScore > 1
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "rgb(221, 221, 221)" }
              }
            />
            <Circle
              style={
                randomScore > 2
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "rgb(221, 221, 221)" }
              }
            />
            <Circle
              style={
                randomScore > 3
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "rgb(221, 221, 221)" }
              }
            />
            <Circle
              style={
                randomScore > 4
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "rgb(221, 221, 221)" }
              }
            />
            <Triangle
              onClick={() => {
                history.push(`/review/${v}`);
              }}
            ></Triangle>
          </div>
        );
      })}
    </>
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
