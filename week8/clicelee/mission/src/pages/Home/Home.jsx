import React from "react";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">오늘은 무엇을 먹을까요?</h1>
      <div className="mb-4">한남중앙로 40길 (한남빌리지)(으)로 배달 ></div>
      <div className="grid grid-cols-3 gap-4 justify-center">
        <div className="bg-gray-200 p-4 text-center rounded-md">피자</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">샐러드</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">햄버거</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">한식</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">분식</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">치킨</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">초밥</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">샌드위치</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">파스타</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">디저트</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">커피</div>
        <div className="bg-gray-200 p-4 text-center rounded-md">...더보기</div>
      </div>
    </div>
  );
};

export default Home;
