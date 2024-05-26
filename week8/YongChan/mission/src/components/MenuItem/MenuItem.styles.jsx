import styled from 'styled-components';

export const InfoStore = styled.span`
border: 1px solid #ddd;
padding: 10px;
`;

export const MenuItemContainer = styled.span`
display:flex;
border: 1px solid #ddd;
padding: 10px;
margin: 5px;
flex-direction: row;
align-items:start;
justify-content: space-between;
`;

export const MenuItemTitle = styled.h2`
font-size: 17px;
font-weight: bold;
margin-bottom: 10px;
display:flex;
flex-direction:column;
`;

export const MenuItemDescription = styled.p`
display:flex;
flex-direction:column;
align-items:center;
`;

export const MenuItemPrice = styled.span`
font-size: 0.9em;
color: #000;
font-weight: bold;
margin-top: 5px;
flex-direction:column;
`;

export const MenuItemPhoto = styled.span`
  width: 54px;
  height: 54px;
  background-color: rgba(236,236,236,1); 
  margin-right: 20px; 
`;

export const Menuget = styled.button`
background-color: rgba(49,130,246,1);
color:white;
border: none;
cursor: pointer;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
`

export const AboutMenu=styled.div`
display:flex;
align-items:start;
` 