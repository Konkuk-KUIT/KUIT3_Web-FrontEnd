import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import useContentLikeMutation from '../../apis/useContentLikeMutation';

interface Props {
  likeCount: number;
  id: string;
}

const LikesBtn: React.FC<Props> = ({ likeCount, id }) => {
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);
  const { mutate } = useContentLikeMutation();

  const handleContentLikeClick = () => {
    mutate({ id, currentLikeCount: likeCountState }, {
      onSuccess: () => {
        setLikeCountState(prev => prev + 1);
      }
    });
  };

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: 'black' }}
          className="dark:text-white"
          onClick={handleContentLikeClick}
        />
      </div>
      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;