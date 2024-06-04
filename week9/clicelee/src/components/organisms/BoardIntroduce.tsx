import React from 'react';
import BoardIntroduceImage from '../../assets/images/boardIntroduceImage.jpg'; // 이미지 경로

const BoardIntroduce = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center text-white dark:text-zinc-700"
      style={{ backgroundImage: `url(${BoardIntroduceImage})` }}
    >
      <p className="text-2xl font-bold">주사위를 사랑하는 모임</p>
    </div>
  );
};

export default BoardIntroduce;
