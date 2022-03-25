import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { createBucket } from "./redux/modules/bucket";

function App() {
  const [list, setList] = React.useState([
    "영화관 가기",
    "매일 책읽기",
    "수영 배우기",
  ]);
  const text = React.useRef(null);
  const dispatch = useDispatch();

  const addBucketList = (e) => {
    // setList([...list, text.current.value]);
    dispatch(createBucket(text.current.value));
  };
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <Switch>
          <Route path="/" exact>
            <BucketList list={list} />
          </Route>
          <Route path="/detail/:index" exact component={Detail}></Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
