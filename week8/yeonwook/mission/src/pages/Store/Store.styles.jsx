import styled from "styled-components";

export const TopDiv = styled.div`
padding-bottom: 150px;
`

export const StoreName = styled.h1`
font-family: 'Pretendard';
font-size: 26px;
font-weight: 700;
line-height: 31.03px;
text-align: left;
color: #191F28;
padding: 40px 0px 0px 24px;
margin: 0px;
`
export const RateContainer = styled.div`
margin: 0px;
padding: 0px 0px 0px 24px ;
display: flex;
justify-content: row;
`
export const RateReview = styled.p`
font-family: 'Pretendard';
font-size: 16px;
font-weight: 500;
line-height: 19.09px;
text-align: left;
color: #4E5968;
padding: 0px 0px 0px 10px;
`
export const Details = styled.p`
font-family: 'Pretendard';
font-size: 15px;
font-weight: 500;
line-height: 17.9px;
text-align: left;
padding: 0px 8px 0px 0px;
color: #4E5968;
margin: 4px;
`

export const Salad = styled.p`
font-family: 'Pretendard';
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: left;
color: #6B7684;
padding: 24px;
`

export const Modal = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    width: 321px;
    height: 202px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 16px;
`
export const ModalTitle = styled.h1`
font-family: 'Pretendard';
font-size: 20px;
font-weight: 700;
line-height: 28px;
text-align: left;
width: 246px;
height: 56px;
`
export const ModalSubTitle = styled.h1`
font-family: Pretendard;
font-size: 15px;
font-weight: 600;
line-height: 17.9px;
text-align: center;
width: 246px;
height: 18px;
color: #6B7684;
`

export const ModalConfirm = styled.button`
width: 139px;
height: 55px;
padding: 17px 37px 18px 39px;
gap: 0px;
border-radius: 16px;
background-color: #3182F6;
color: #FFFFFF;
font-family: 'Pretendard';
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: center;
border: none;
margin: 6px;
`

export const ModalCancel = styled.button`
width: 139px;
height: 55px;
padding: 17px 37px 18px 39px;
gap: 0px;
border-radius: 16px;
background-color: #F2F4F6;
color: #505967;
font-family: 'Pretendard';
font-size: 17px;
font-weight: 600;
line-height: 20.29px;
text-align: center;
border: none;
`