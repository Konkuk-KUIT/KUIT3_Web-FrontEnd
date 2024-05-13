import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../db";

const User = () => {
  const params = useParams();
  /* 
  console.log(params);
  -> 
  <Route path="/detail/:id" element={<User />} />
  Router에서 파라미터 값을 :id로 지정했기 때문에, console에 { id: 숫자 }값이 찍힘
  
  console.log(params.id);
  -> 숫자만 찍힘
  */
  return (
    <>
      <div>{data[params.id].name}</div>
      <div>{data[params.id].age}</div>
      <div>{data[params.id].description}</div>
    </>
  );
};

export default User;
