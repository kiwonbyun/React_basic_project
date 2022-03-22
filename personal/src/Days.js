import React from "react";
import styled from "styled-components";

import FrontScore from "./FrontScore";

const Days = (props) => {
  const randomScore = Math.floor(Math.random() * 5);
  return (
    <Day>
      <div>
        <h2>내 일주일은?</h2>
      </div>
      <div>
        <FrontScore />
      </div>
    </Day>
  );
};

const Day = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Days;
