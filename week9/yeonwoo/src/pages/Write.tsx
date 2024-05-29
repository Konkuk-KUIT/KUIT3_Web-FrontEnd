import React, { useState } from 'react';
import SearchHeader from '../components/organisms/Appbar';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { formatDate } from '../utils/formatDate';
import useContentSubmitMutation from '../apis/useContentSubmitMutation';
import ScrollToTop from '../components/atoms/ScrollToTop';

const Write = () => {
  // useContentSubmitMutation을 호출하여 contentSubmitMutation 객체 생성
  // 글 제출할 때(POST할 때) 사용
  const contentSubmitMutation = useContentSubmitMutation();

  // 제목
  const [newTitle, setNewTitle] = useState<string>('');

  // 본문
  const [newWriting, setNewWriting] = useState<string>('');

  const date = new Date();
  const navigate = useNavigate();

  // 제목 변경 함수
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  // 본문 변경 함수
  const handleWritingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewWriting(e.target.value);
  };

  // 제출 함수
  const handleWritingSubmit = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (newTitle.trim() === '') {
      alert('제목이 빈 칸인데요?');
    } else if (newWriting.trim() === '') {
      alert('본문에 아무것도 안 적으셨네요??');
    } else {
      // 서버에 POST 요청 보내기
      await contentSubmitMutation.mutate({
        id: uuid(),
        title: newTitle,
        body: newWriting,
        time: formatDate(date),
        commentCount: 0,
        author: '작성자',
        likeCount: 0,
      });

      await navigate('/');
      console.log('New comment:', newWriting);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col px-8">
      <SearchHeader />
      <div className="font-pretendard text-black sm:mx-32 mt-10">
        <form className="mt-4">
          <div className="text-xl font-semibold dark:text-white">제목</div>
          <input
            value={newTitle}
            onChange={handleTitleChange}
            className="w-full p-2 border rounded-md h-10 mt-4"
          />

          <div className="flex mt-8">
            <div className="text-xl font-semibold">본문</div>
          </div>

          <div className="w-full h-80 mt-4">
            <textarea
              value={newWriting}
              onChange={handleWritingChange}
              className="w-full h-full p-2 border rounded-md"
            />
          </div>

          <div className="flex justify-end mb-20">
            <SendIcon
              sx={{ color: 'black', cursor: 'pointer' }}
              className="dark:text-white"
              onClick={handleWritingSubmit}
            />
          </div>
        </form>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Write;
