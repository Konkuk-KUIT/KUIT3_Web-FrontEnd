import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

interface Props {
  likeCount: number;
  onClick: () => void;
}

const LikesBtn: React.FC<Props> = ({ likeCount }) => {
  // 좋아요 갯수 상태
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);

  // 좋아요 갯수 상태 변화 확인 console.log
  useEffect(() => {
    console.log("likeCountState 값:", likeCountState);
  }, [likeCountState]); // likeCountState가 변경될 때마다 실행됨

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: "black" }}
          className="dark:text-white"
          onClick={() => setLikeCountState(likeCountState + 1)}
        />
      </div>

      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
