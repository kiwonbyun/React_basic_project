import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;
  bucket_list.map((b, idx) => {
    if (b.completed === true) {
      count++;
    }
  });

  return (
    <Progressbar>
      <Highlight width={(count / bucket_list.length) * 100 + "%"}></Highlight>
      <Circle></Circle>
    </Progressbar>
  );
};

const Progressbar = styled.div`
  background-color: #eee;
  width: 100%;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
const Highlight = styled.div`
  background-color: darkblue;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 20px;
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 5px solid purple;
  border-radius: 9999px;
  margin-left: -10px;
`;

export default Progress;
