import React from 'react';
import SendIcon from '@mui/icons-material/Send';

interface Props {
  // 수정된 제목
  editedTitle: string;

  // 제목 수정 함수
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // 수정된 본문
  editedBody: string;

  // 본문 수정 함수
  handleBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

  // 수정 버튼을 눌렀을 때
  handleContentEditClick: () => Promise<void>;
}

const ContentEditing: React.FC<Props> = ({
  editedTitle,
  handleTitleChange,
  editedBody,
  handleBodyChange,
  handleContentEditClick,
}) => {
  return (
    <>
      <div className="flex my-8">
        <div className="text-xl font-semibold">제목</div>
      </div>
      <input
        value={editedTitle}
        onChange={handleTitleChange}
        className="w-full p-2 border rounded-md h-10 my-4"
      />
      <div className="flex my-8">
        <div className="text-xl font-semibold">본문</div>
      </div>
      <textarea
        value={editedBody}
        onChange={handleBodyChange}
        className="w-full h-full p-2 border rounded-md"
      />
      <div className="flex justify-end whitespace-nowrap mt-10">
        <SendIcon
          sx={{ color: 'black', cursor: 'pointer' }}
          className="dark:text-white"
          onClick={handleContentEditClick}
        />
      </div>
    </>
  );
};

export default ContentEditing;
