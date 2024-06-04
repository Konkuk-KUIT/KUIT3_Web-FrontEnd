// 미션: 좋아요 버튼 클릭 시 +1 PATCH mutation hook 구현하기

// 좋아요 버튼을 클릭했을 때 함수 -> 좋아요를 누르면 좋아요 카운트가 1 늘어난다.
// likeCountState에 1을 더해줘야 겠네요?
// 1. apis/useContentLikeMutation.ts 구현
// 2. molecules/LikesBtn.tsx에서 handleContentLikeClick 구현(다른 곳에 구현해도 됨)

import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from './instance';
import { useNavigate } from 'react-router-dom';

// 좋아요 클릭 후 호출되는 PATCH mutation hook
const useLikeMutation = (id: string) => {
    const navigate = useNavigate();
    console.log("useLikeMutation: ", id);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async () => {
            // 좋아요 증가 처리를 위한 PATCH 요청
            const response = await instance.patch(`like/${id}`);
            return response.data;
        },

        // mutation이 성공했을 때
        onSuccess: () => {
            console.log('likeMutation success!');

            // 쿼리 다시 가져오기
            queryClient.invalidateQueries({ queryKey: ['fetchFeedData'] });
            // 페이지 이동 (예시: '/board')
            navigate(`/board`);
        },
    });

    return mutation;
};

export default useLikeMutation;





