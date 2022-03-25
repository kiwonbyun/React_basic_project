import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BucketList = ({ list }) => {
  const my_list = useSelector((state) => state.bucket.list);

  return (
    <div>
      {my_list.map((list, index) => {
        return (
          <Link key={index} to={`/detail/${index}`}>
            <Item_list>{list}</Item_list>
          </Link>
        );
      })}
    </div>
  );
};

const Item_list = styled.div`
  background-color: aliceblue;
  padding: 10px;
  margin: 5px 0px;
`;

export default BucketList;
