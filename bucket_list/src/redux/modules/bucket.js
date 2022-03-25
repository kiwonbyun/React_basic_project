// bucket.js

// Actions
const CREATE = "bucket/CREATE";
const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "리액트배우기!"],
};
const DELETE = "bucket/DELETE";

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}
export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, index) => {
        return parseInt(action.bucket_index) !== index;
      });

      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
