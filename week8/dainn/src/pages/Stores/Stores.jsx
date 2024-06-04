import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";
import StoreList from "../../components/StoreList/StoreList";
import stores from '../../models/stores'
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.div`
width: 390px;
height: 59px;
top: 88px;
padding: 26px 298px 2px 24px;
gap: 0px;
opacity: 0px;
font-family: Pretendard;
font-size: 26px;
font-weight: 700;
line-height: 31.03px;
text-align: left;

`

const StyledImg = styled.div`
width: 54px;
height: 54px;
top: 16px;
margin-left: 24px;
margin-top: 16px;
gap: 0px;
border-radius: 8px;
opacity: 0px;
background: #ECECEC;

`;

const StyledList = styled.div`
display:flex;
width: 390px;
height: 116px;
gap: 0px;
opacity: 0px;

`


const Stores = () => {
  const navigate = useNavigate();
  const setStore = useCartStore((state) => state.setStore);
  const handleOrder = (store) => {
    const url = '/store/'+store.id;
    setStore(store);
    navigate(url);
  };


  return (
  <div>
  <StyledHeader>샐러드</StyledHeader>

        {stores.map((store) => {
          return <StyledList onClick={() => handleOrder(store)}>
            <StyledImg></StyledImg>
            <StoreList  store={store} />
            </StyledList>;
        })}

  </div>



  )

};

export default Stores;

