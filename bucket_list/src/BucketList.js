import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BucketList = (props) => {
  const my_list = useSelector((state) => state.bucket.list);

  return (
    <div style={{ overflow: "auto", width: "100%", height: "400px" }}>
      {my_list.map((list, index) => {
        return (
          <Link
            key={index}
            to={`/detail/${index}`}
            style={{ textDecoration: "none" }}
          >
            <Item_list completed={list.completed}>{list.text}</Item_list>
          </Link>
        );
      })}
    </div>
  );
};

const Item_list = styled.div`
  background-color: ${(props) => (props.completed ? "darkblue" : "aliceblue")};
  padding: 10px;
  margin: 5px 0px;
  text-decoration: none;
  color: ${(props) => (props.completed ? "white" : "darkblue")};
  border-radius: 15px;
`;

export default BucketList;
