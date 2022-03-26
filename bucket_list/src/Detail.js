import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBucket,
  deleteBucketFB,
  updateBucket,
  updateBucketFB,
} from "./redux/modules/bucket";
import { useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const history = useHistory();

  return (
    <Wrap>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <Button
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}
      >
        완료하기
      </Button>
      <Button
        onClick={() => {
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}
      >
        삭제하기
      </Button>
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        뒤로가기
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: skyblue;
  color: darkblue;
  font-weight: 500;
  border: none;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 20px;
  width: 300px;
  font-size: 15px;
  &:hover {
    transition: 0.5s;
    background-color: darkblue;
    color: white;
  }
`;

export default Detail;
