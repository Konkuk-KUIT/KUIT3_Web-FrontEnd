import React, { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import useContentLikeMutation from "../../apis/useContentLikeMutation";
import { useParams } from "react-router-dom";
import { useFeedDataQuery } from "../../apis/fetchFeedsData";
import Loading from "../../pages/Loading";

interface Props {
  likeCount: number;
}

const LikesBtn: React.FC<Props> = ({ likeCount }) => {
  // 좋아요 갯수 상태
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);

  const { id } = useParams<{ id: string }>();

  const contentLikeMutation = useContentLikeMutation(id!);

  //GET
  const { feedData, isFeedDataLoading } = useFeedDataQuery(id!);

  const handleContentLikeClick = async () => {
    if (feedData) {
      await setLikeCountState(likeCountState + 1);
      await contentLikeMutation.mutate({
        ...feedData,

        likeCount: likeCountState,
      });
    }
  };

  if (isFeedDataLoading) {
    return <Loading />;
  }
  if (feedData == null) {
    return <Loading />;
  }

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: "black" }}
          className="dark:text-white"
          onClick={handleContentLikeClick}
        />
      </div>

      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
