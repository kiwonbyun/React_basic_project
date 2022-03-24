import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Review = (props) => {
  const { day_name } = useParams();
  const [score, setScore] = useState(0);
  const onClick = (e) => {
    setScore((current) => e.target.id);
  };
  const text = document;
  const handleKeyDown = (e) => {
    if (e.key >= 1 && e.key <= 5) {
      setScore(e.key);
    }
  };
  useEffect(() => {
    text.addEventListener("keydown", handleKeyDown);
    return () => {
      text.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Wrap>
      <div>
        <Span>{day_name}요일</Span>
        <span>평점 남기기</span>
      </div>
      <Scorediv>
        <Circle
          id="1"
          onClick={onClick}
          style={score >= 1 ? { backgroundColor: "yellow" } : null}
        ></Circle>
        <Circle
          id="2"
          onClick={onClick}
          style={score >= 2 ? { backgroundColor: "yellow" } : null}
        ></Circle>
        <Circle
          id="3"
          onClick={onClick}
          style={score >= 3 ? { backgroundColor: "yellow" } : null}
        ></Circle>
        <Circle
          id="4"
          onClick={onClick}
          style={score >= 4 ? { backgroundColor: "yellow" } : null}
        ></Circle>
        <Circle
          id="5"
          onClick={onClick}
          style={score >= 5 ? { backgroundColor: "yellow" } : null}
        ></Circle>
      </Scorediv>
      <div>
        <Link to="/">
          <Button>평점 남기기</Button>
        </Link>
      </div>
    </Wrap>
  );
};
const Span = styled.span`
  background-color: aqua;
  padding: 5px 10px;
  border-radius: 20px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
  cursor: pointer;
`;
const Scorediv = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const Button = styled.button`
  background-color: tomato;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
`;

export default Review;
