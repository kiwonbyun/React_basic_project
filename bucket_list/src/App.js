import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { loadBucketFB, addBucketFB } from "./redux/modules/bucket";
import Progress from "./Progress";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const text = React.useRef("");
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(loadBucketFB());
  }, []);
  const addBucketList = (e) => {
    // setList([...list, text.current.value]);
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress />
        <Line />
        <Switch>
          <Route path="/" exact>
            <BucketList />
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
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          위로가기
        </button>
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
  border: 1px solid darkblue;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: skyblue;
    color: darkblue;
    font-weight: 500;
    border: none;
    margin-left: 5px;
    padding: 10px;
    border-radius: 20px;
    &:hover {
      transition: 0.5s;
      background-color: darkblue;
      color: white;
    }
  }
  input {
    width: 100px;
    height: 13px;
    &:focus {
      background-color: aliceblue;
      width: 180px;
      height: 25px;
      transition: 0.5s;
      outline: none !important;
      border-color: red;
      border-radius: 10px;
    }
  }
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid darkblue;
`;

const Title = styled.h1`
  color: darkblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
