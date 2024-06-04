import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import useContentLikeMutation from '../../apis/useContentLikeMutation';
import { useParams } from 'react-router-dom';
import { useFeedDataQuery } from '../../apis/fetchFeedsData';

interface Props {
  likeCount: number;
}

const LikesBtn: React.FC<Props> = ({ likeCount }) => {
  // 좋아요 갯수 상태
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);
  const { id } = useParams<{ id: string }>(); // URL에서 ID를 가져옴
  const { feedData, isFeedDataLoading } = useFeedDataQuery(id!);
  const contentLikeMutation = useContentLikeMutation(id!);

  const handleLikeClick = async () => {
    await setLikeCountState(likeCountState+1)

    if (feedData) {
      await contentLikeMutation.mutate({
        // id, time, commentNum, author, title, body는 그대로이므로
        ...feedData,
        
        likeCount: likeCountState,
      });
    }
    
  };

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: 'black' }}
          className="dark:text-white"
          onClick={handleLikeClick}
        />
      </div>

      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
