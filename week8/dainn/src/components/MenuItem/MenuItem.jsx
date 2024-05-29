import React from "react";
import useCartStore from "../../store/useCartStore";
import styled from "styled-components";

const StyledDiv = styled.div`
  display:flex;
  width: 390px;
  height: 110px;
`;
const StyledMenuInfo = styled.div`
  display:flex;
  flex-direction: column;
  margin-left: 16px;
`;

const StyledImg = styled.div`
  width: 54px;
  height: 54px;
  margin-top: 28px;
  margin-left: 24px;
  gap: 0px;
  border-radius: 27px;
  opacity: 0px;
  background: #ECECEC;

  left: 16px;
`;

const Styledh3 = styled.div`

  margin-left: 16px;
  margin-top: 16px;

  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 20.29px;
  text-align: left;
`;

const StyledSpan = styled.div`

  margin-left: 16px;
  margin-top: 5px;

  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;
  Width: 47px;
  Height: 16px;

  color: #6B7684
`;

const StyledP = styled.div`
  margin-left: 16px;
  margin-top: 5px;

  font-family: Pretendard;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.51px;
  text-align: left;

  Width: 201px;
  Height: 32px;

  color: #6B7684
`;

const StyledButton = styled.div`

  width: 52px;
  height: 32px;
  margin-top: 40px;
  margin-left: 19px;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;


  background: #3182F6;
`

const StyledText = styled.div`
  margin-top: 8px;
  margin-left:15px;

  top: 40px;
  color: #FFFFFF;
`

const MenuItem = ({ menu }) => {
  console.log("menu");
  const addMenu = useCartStore((state) => state.addMenu);
  const store = useCartStore((state) => state.store);
  const storeId = useCartStore((state) => state.storeId);

  const setStoreId = useCartStore((state) => state.setStoreId);

  const handleAddMenu = () => {
    console.log("담기 ---- : ", storeId);


    if(storeId == -1){
      setStoreId(store.id);
      addMenu(menu);
    } else if (storeId != store.id){  // alert
      const confirmMessage = "장바구니를 비우고 다시 채우시겠습니까?";
      if (window.confirm(confirmMessage)) { // 확인을 클릭한 경우
        setStoreId(store.id);
        addMenu(menu);
      }
    }else {
      addMenu(menu);
    }

  };

  return (
    <StyledDiv>
      <StyledImg>      </StyledImg>
    <StyledMenuInfo>
          <Styledh3>{menu.name}</Styledh3>
          <StyledSpan>{menu.price}</StyledSpan>
          <StyledP>{menu.ingredients}</StyledP>

    </StyledMenuInfo>
    <StyledButton onClick={handleAddMenu} type="button">
      <StyledText>담기</StyledText>
    </StyledButton>
    </StyledDiv>
  );
};

export default MenuItem;
