import React, { useState, useEffect } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

interface Props {
  likeCount: number;
  handleContentLikeClick: () => void;
}

const LikesBtn: React.FC<Props> = ({ likeCount, handleContentLikeClick }) => {
  // 좋아요 갯수 상태
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);

  useEffect(() => {
    setLikeCountState(likeCount);
  }, [likeCount]);

  const handleClick = () => {
    setLikeCountState(prev => prev + 1);
    handleContentLikeClick();
  };

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: 'black' }}
          className="dark:text-white"
          onClick={handleClick}
        />
      </div>

      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
