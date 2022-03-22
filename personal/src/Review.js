import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Review = (props) => {
  const history = useHistory();
  const day_name = useParams();
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const CircleClick = (e, index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        clickStates[i] = true;
      } else {
        clickStates[i] = false;
      }
    }
    setClicked(clickStates);
  };
  return (
    <Wrap>
      <Title>
        <p>{day_name.day_name}요일</p>
        <p>평점 남기기</p>
      </Title>
      <div style={{ display: "flex" }}>
        <Circle
          onClick={(e) => CircleClick(e, 0)}
          style={
            clicked[0]
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "rgb(221, 221, 221)" }
          }
        />
        <Circle
          onClick={(e) => CircleClick(e, 1)}
          style={
            clicked[1]
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "rgb(221, 221, 221)" }
          }
        />
        <Circle
          onClick={(e) => CircleClick(e, 2)}
          style={
            clicked[2]
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "rgb(221, 221, 221)" }
          }
        />
        <Circle
          onClick={(e) => CircleClick(e, 3)}
          style={
            clicked[3]
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "rgb(221, 221, 221)" }
          }
        />
        <Circle
          onClick={(e) => CircleClick(e, 4)}
          style={
            clicked[4]
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "rgb(221, 221, 221)" }
          }
        />
      </div>
      <div>
        <ScoreBtn
          onClick={() => {
            history.goBack();
          }}
        >
          평점남기기
        </ScoreBtn>
      </div>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const Title = styled.div`
  display: flex;
  p:first-child {
    margin-right: 5px;
    background-color: tomato;
    border-radius: 10px;
    color: white;
  }
  p {
    font-size: 20px;
    padding: 5px;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
`;

const ScoreBtn = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: aquamarine;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 15px;
`;

export default Review;
