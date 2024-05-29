import styled from "styled-components";

export const CardCollection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const CardContainer = styled.div`
  width: 500px;
  height: 500px;
  transition: all 0.1s;
  position: relative;
  background-color: beige;
  text-align: center;
  border-radius: 15%;
`;

export const CardOverlay = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(125, 228, 21, 0.8) 45%,
    rgba(229, 236, 20, 0.6) 50%,
    transparent 54%
  );
  filter: brightness(1) opacity(0.9);
  mix-blend-mode: screen;
  background-size: 150% 150%;
  background-position: 100%;
  transition: all 0.1s;
  border-radius: 15%;
`;

export const CardContent = styled.div`
  width: 500px;
  height: 500px;
  background-image: url("https://avatars.githubusercontent.com/u/67897841?v=4");
  background-size: cover;
  border-radius: 15%;
`;
