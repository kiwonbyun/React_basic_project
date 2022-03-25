import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket } from "./redux/modules/bucket";
const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const bucket_lndex = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const history = useHistory();

  return (
    <div>
      <h1>{bucket_list[bucket_lndex]}</h1>
      <button
        onClick={() => {
          dispatch(deleteBucket(bucket_lndex));
          history.goBack();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
