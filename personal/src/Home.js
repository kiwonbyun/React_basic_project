import React from "react";
import styled from "styled-components";

import FrontScore from "./FrontScore";

const Home = (props) => {
  return (
    <Day>
      <div>
        <h2 style={{ marginBottom: "30px" }}>내 일주일은?</h2>
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

export default Home;
