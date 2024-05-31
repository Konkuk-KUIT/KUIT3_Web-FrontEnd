import { PacmanLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-y-4">
      <div className="font-pretendard font-bold text-black ">
        잠시만 기다려주세요
      </div>
      <PacmanLoader color="#FFC939" />
    </div>
  );
};

export default Loading;
