import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
//
import Home from "./Home";
import Review from "./Review";

function App() {
  return (
    <Firstdiv>
      <Switch>
        <Route path="/review/:day_name">
          <Review />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Firstdiv>
  );
}

const Firstdiv = styled.div`
  border: 1px solid grey;
  width: 300px;
  margin: 20px auto;
  height: 700px;
`;

export default App;
