// 미션: 글 삭제 시 DELETE mutation hook 구현하기

// 삭제 버튼을 눌렀을 때 mutation
// 삭제 버튼을 눌렀을 때 -> 삭제 버튼 누르고 useNavigate 사용해서 board로 이동
// 1. apis/useContentDeleteMutation.ts 구현
// 2. pages/Content.tsx에서 handleContentDeleteClick 구현
// 3. organisms/ContentView.tsx도 코드 추가


import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from './instance';
import { useNavigate } from 'react-router-dom';

// 글 삭제 완료 후 호출되는 DELETE mutation hook
const useContentDeleteMutation = (id: string) => {
    const navigate = useNavigate();
    console.log("useContentDeleteMutation: ", id);
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async () => {
        // delete 사용
        const response = await instance.delete(`result/${id}`);
        return response.data;
        },

        // mutation이 성공했을 때
        onSuccess: () => {
        console.log('deleteMutation success!');

        queryClient.invalidateQueries({ queryKey: ['fetchFeedData'] }); // 삭제가 성공하면 쿼리를 다시 가져옴
        navigate(`/board`)
        },
    });

  return mutation;
};

export default useContentDeleteMutation;
