import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-2">오늘은 무엇을 먹을까요?</h1>
        <p className="text-gray-600 mb-4">
        한남중앙로 40길 (한남 빌리지)(으)로 배달
        </p>
        <a
          href="/store"
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          가게 목록 보기
        </a>
      </div>
    </div>
  );
};

export default Home;
