// LikesBtn.tsx
import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import useContentLikeMutation from '../../apis/useContentLikeMutation';
import { CardResult } from "../../type/card";

interface Props {
  likeCount: number;
  cardResult: CardResult;
  handleLikeClick : ()=>void;
}

const LikesBtn: React.FC<Props> = ({ likeCount, cardResult, handleLikeClick }) => {
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);

  const contentLikeMutation = useContentLikeMutation();
  
  const handleContentLikeClick = async () => {
    try {
      await contentLikeMutation.mutateAsync(cardResult);
      setLikeCountState(prevCount => prevCount + 1);
    } catch (error) {
      console.error('An error occurred while adding like:', error);
    }
  }

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer" onClick={handleContentLikeClick}>
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: 'black' }}
          className="dark:text-white"
        />
      </div>
      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
