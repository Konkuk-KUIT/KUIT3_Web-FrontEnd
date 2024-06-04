// 미션: 좋아요 버튼 클릭 시 +1 PATCH mutation hook 구현하기

// 좋아요 버튼을 클릭했을 때 함수 -> 좋아요를 누르면 좋아요 카운트가 1 늘어난다.
// likeCountState에 1을 더해줘야 겠네요?
// 1. apis/useContentLikeMutation.ts 구현
// 2. molecules/LikesBtn.tsx에서 handleContentLikeClick 구현(다른 곳에 구현해도 됨)
import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from './instance';

const useContentLikeMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({id,likeCount} : {id:string; likeCount:number}) => {
      return await instance.patch(`/result/${id}`,{likeCount});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchFeedsData'] });
    },
  });

  return mutation;
};

export default useContentLikeMutation;
