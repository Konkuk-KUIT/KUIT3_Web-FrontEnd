import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/instance';

interface Props {
  likeCount: number;
  contentId: string;
}

const LikesBtn: React.FC<Props> = ({ likeCount, contentId }) => {
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);

  // 좋아요 mutation 설정
  const contentLikeMutation = useMutation({
    mutationFn: async (newLikeCount: number) => {
      const response = await instance.patch(`/content/${contentId}/like`, { likeCount: newLikeCount });
      return response.data;
    },
    onSuccess: (data) => {
      setLikeCountState(data.likeCount);
    },
  });

  const handleContentLikeClick = async () => {
    try {
      const newLikeCount = likeCountState + 1;
      await contentLikeMutation.mutateAsync(newLikeCount);
    } catch (error) {
      console.error('Error while mutating like count:', error);
    }
  };

  return (
    <div className="items-center flex gap-x-2">
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
