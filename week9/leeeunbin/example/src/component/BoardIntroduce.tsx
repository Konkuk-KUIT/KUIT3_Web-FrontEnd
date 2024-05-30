import BoardIntroduceImage from '/image/boardIntroduceImage.jpg';

const BoardIntroduce = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center text-white dark:text-zinc-700"
      style={{ backgroundImage: `url(${BoardIntroduceImage})` }}
    >
      <p className="text-2xl font-bold">KUIT WEB 9주차 미션</p>
    </div>
  );
};

export default BoardIntroduce;