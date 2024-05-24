import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  title: string;
  time: string;
  commentNum: number;
  author: string;
  likes: number;
  onClick: () => void;
}

const BoardCard: React.FC<Props> = ({
  title,
  time,
  commentNum,
  author,
  likes,
  onClick,
}) => {
  const maxLength = 12; // 최대 길이 설정
  const trimmedTitle =
    title.length > maxLength ? title.substring(0, maxLength) + '...' : title;

  return (
    <div
      className="font-pretendard w-full md:w-1/3 h-auto bg-white dark:bg-zinc-700 text-zinc-700 dark:text-white border-b-2
    overflow-hidden p-4 flex flex-col justify-between cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <div>
        <div className="font-bold text-lg">
          {trimmedTitle} [{commentNum}]
        </div>
      </div>
      <div>
        <div className="text-left text-zinc-500 text-xs ">{time}</div>
        <div className="flex justify-between items-center mt-2">
          <div>{author}</div>
          <div className="flex gap-x-2">
            <FavoriteBorderIcon />
            <div>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
