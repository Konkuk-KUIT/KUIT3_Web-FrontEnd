import { styled } from "styled-components";

export const CartBox = styled.div`
  box-sizing: border-box;
  padding: 44px 0 70px;
`;

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  z-index: 1;
  background: #fff;

  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  img {
    width: 10px;
    height: 17.5px;
  }
`;

export const CancelBtn = styled.button`
  background: none;
  border: none;
  font-family: "PretendardSemiBold";
  font-size: 16px;
  color: #333d4b;
`;

export const Divider = styled.hr`
  margin: 0;
  height: 16px;
  background: #f2f4f6;
  border: none;
`;

export const OrderItemTitleBox = styled.div`
  padding: 26px 24px 12px;
  display: flex;
  justify-content: space-between;

  h3 {
    font-family: "PretendardBold";
    font-size: 17px;
    color: #6b7684;
  }

  div {
    display: flex;
    align-items: center;
    gap: 4px;

    span {
      padding-top: 1px;
      font-size: 15px;
      color: #f04452;
    }
    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export const OrderItemList = styled.section`
  padding: 0;
  margin: 0;
`;

export const AddMoreItemBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  border: none;
  background: none;
  border-top: 1px solid #f2f4f6;

  span {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    color: #3182f6;
  }
`;

export const PriceInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 55px;
`;

export const PriceBox = styled.div`
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;

  span {
    font-family: "PretendardMedium";
    font-size: 17px;
  }
  span:first-child {
    color: #8b95a1;
  }
  span:last-child {
    color: #505967;
  }
`;

export const TotalPriceBox = styled.div`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 17px;
    color: #4e5968;
  }
  span:first-child {
    font-family: "PretendardMedium";
  }
  span:last-child {
    font-family: "PretendardSemiBold";
  }
`;

export const NoMenuInformBox = styled.div`
  width: 100%;
  text-align: center;
  height: 150px;
  line-height: 150px;

  span {
    font-family: "PretendardSemiBold";
    font-size: 17px;
    color: #6b7684;
  }
`;

export const PaymentBox = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background: #fff;
  border: none;

  display: flex;
  flex-direction: column;
  gap: 20px;

  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 20px 24px;

  span {
    font-family: "PretendardMedium";
    font-size: 17px;
    color: #6B7684;
  }
`;

export const DisabledPaymentBtn= styled.button`
  width: 100%;
  padding: 18px 0;
  border-radius: 16px;
  border: none;
  background: #D0DFFB;
  color: #FFF;
  font-size: 16px;
  line-height: 19px;
  font-family: "PretendardSemiBold";
`;

export const AbledPaymentBtn = styled.button`
  width: 100%;
  padding: 18px 0;
  border-radius: 16px;
  border: none;
  background: #3182F6;
  color: #FFF;
  font-size: 16px;
  line-height: 19px;
  font-family: "PretendardSemiBold";
`;
