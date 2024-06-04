// 글 상세 확인 페이지 (‘/content/:id’)

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DarkModeToggle from "../components/atoms/DarkModeToggle";

import Loading from "./Loading";
import SearchHeader from "../components/organisms/Appbar";

import { useFeedDataQuery } from "../apis/fetchFeedsData";

import useContentEditMutation from "../apis/useContentEditMutation";
import ScrollToTop from "./../components/atoms/ScrollToTop";
import ContentEditing from "../components/organisms/ContentEditing";
import ContentView from "../components/organisms/ContentView";
import useContentDeleteMutation from "../apis/useContentDeleteMutation";
import useContentLikeMutation from "../apis/useContentLikeMutation";

const Content: React.FC = () => {
  // useParams를 통하여 uri에 있는 id를 가져옴
  const { id } = useParams<{ id: string }>();

  const contentEditMutation = useContentEditMutation(id!);
  const contentDeleteMutation = useContentDeleteMutation(id!);
  const contentLikeMutation = useContentLikeMutation(id!);

  const navigate = useNavigate();

  // GET
  const { feedData, isFeedDataLoading } = useFeedDataQuery(id!);

  // 수정 중인지
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // 수정된 제목
  const [editedTitle, setEditedTitle] = useState<string>("");

  // 수정된 본문
  const [editedBody, setEditedBody] = useState<string>("");

  // 제목 수정 함수
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  // 본문 수정 함수
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedBody(e.target.value);
  };

  // 수정 후 제출하기 버튼을 눌렀을 때
  const handleContentEditClick = async () => {
    if (feedData) {
      await contentEditMutation.mutate({
        // id, time, commentNum, author, likes는 그대로이므로
        ...feedData,

        title: editedTitle,
        body: editedBody,
      });

      await setIsEditing(false);
    }
  };

  if (isFeedDataLoading) {
    return <Loading />;
  }

  // 수정 버튼을 눌렀을 때
  const handleEditClick = () => {
    if (feedData !== undefined) {
      setIsEditing(true); // isEditing 값(수정 여부 상태값)을 true로 변경
      setEditedTitle(feedData.title);
      setEditedBody(feedData.body);
    }
  };

  // feedData가 undefined일 때를 대비하기 위한 early return
  if (feedData == null) {
    return <Loading />;
  }

  // 삭제 버튼을 눌렀을 때
  const handleContentDeleteClick = () => {
    if (id) {
      contentDeleteMutation.mutate();
      navigate("/");
    }
  };

  // 좋아요 버튼을 눌렀을 때
  const handleContentLikeClick = () => {
    if (id) {
      contentLikeMutation.mutate();
    }
  };

  return (
    <div className="font-pretendard min-h-screen w-screen bg-white dark:bg-zinc-700 text-black dark:text-white flex flex-col">
      <SearchHeader />
      <div className=" text-black sm:mx-32 pb-72">
        {isEditing ? (
          // 수정 중일 때
          <ContentEditing
            editedTitle={editedTitle}
            handleTitleChange={handleTitleChange}
            editedBody={editedBody}
            handleBodyChange={handleBodyChange}
            handleContentEditClick={handleContentEditClick}
          />
        ) : (
          // 수정 중이 아닐 때
          <ContentView
            title={feedData.title}
            author={feedData.author}
            time={feedData.time}
            body={feedData.body}
            likeCount={feedData.likeCount}
            handleEditClick={handleEditClick}
            handleContentDeleteClick={handleContentDeleteClick} // 미션 1
            handleLikeClick={handleContentLikeClick} // 미션 2
          />
        )}
      </div>
      <DarkModeToggle />
      <ScrollToTop />
    </div>
  );
};

export default Content;
