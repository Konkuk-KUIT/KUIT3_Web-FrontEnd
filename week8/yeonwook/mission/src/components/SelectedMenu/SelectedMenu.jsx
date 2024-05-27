import React from "react";
import image from "../../assets/img/image.png";
import detailarrow from "../../assets/img/detailarrow.svg"
import { Arrow, CartImg, ItemDetail, ItemName, Quantity, TopDiv } from "./SelectedMenu.styles";


const SelectedMenu = ({ groupedMenu }) => {

    return (
        <TopDiv>
            <CartImg src={image} alt="store" />
            <div>
                <ItemName>{groupedMenu.name}</ItemName>
                <ItemDetail>{groupedMenu.ingredients}</ItemDetail>
                <ItemDetail>{groupedMenu.price}원</ItemDetail>
            </div>
            <Quantity>{groupedMenu.count}개</Quantity>
            <Arrow src={detailarrow} alt="상세정보" />
        </TopDiv>
    );
};

export default SelectedMenu;