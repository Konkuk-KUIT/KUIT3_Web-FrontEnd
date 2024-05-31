// 미션: 좋아요 버튼 클릭 시 +1 PATCH mutation hook 구현하기

// 좋아요 버튼을 클릭했을 때 함수 -> 좋아요를 누르면 좋아요 카운트가 1 늘어난다.
// likeCountState에 1을 더해줘야 겠네요?
// 1. apis/useContentLikeMutation.ts 구현
// 2. molecules/LikesBtn.tsx에서 handleContentLikeClick 구현(다른 곳에 구현해도 됨)
import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from './instance';
import { CardResult } from '../type/card';

// 글 수정 완료 후 제출 시 PATCH mutation hook
const useContentLikeMutation = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newData: CardResult) => {
      // patch 사용
      const response = await instance.patch(`result/${id}`, newData);
      return response.data;
    },

    // mutation이 성공했을 때
    onSuccess: () => {
      console.log('likeCompleteMutation success!');

      queryClient.invalidateQueries({ queryKey: ['fetchFeedData'] }); // 수정이 성공하면 쿼리를 다시 가져옴
    },
  });

  return mutation;
};

export default useContentLikeMutation;
