import React from 'react';
import LikesBtn from '../molecules/LikesBtn';
import { IconButton } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  // 제목
  title: string;

  // 작성자
  author: string;

  // 작성 시간
  time: string;

  // 본문
  body: string;

  // 좋아요 개수
  likeCount: number;

  // 수정 버튼을 눌렀을 때
  handleEditClick: () => void;

  // 삭제 버튼을 눌렀을 때
  // handleContentDeleteClick <- 미션 구현

  // 좋아요 버튼을 눌렀을 때
  // handleLikeClick <- 미션 구현
}

const ContentView: React.FC<Props> = ({
  title,
  author,
  time,
  body,
  likeCount,
  handleEditClick,
}) => {
  return (
    <>
      <div className="text-2xl font-bold dark:text-white mt-4">{title}</div>
      <div className="text-sm text-gray-400 dark:text-white mt-4">
        {author} | {time}
      </div>
      <div className="h-auto bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg mt-10 p-4 ">
        {body}
      </div>
      <div className="flex justify-between mt-10">
        {/* feedData의 likeCount 전달 */}
        <LikesBtn likeCount={likeCount} />

        <div className="flex gap-x-2 whitespace-nowrap">
          {/* 수정 버튼 */}
          <IconButton aria-label="fix" onClick={handleEditClick}>
            <BuildIcon sx={{ color: 'black' }} className="dark:text-white" />
          </IconButton>

          {/* 삭제 버튼 미션 구현*/}
          <IconButton aria-label="delete" onClick={() => {}}>
            <DeleteIcon sx={{ color: 'black' }} className="dark:text-white" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ContentView;
