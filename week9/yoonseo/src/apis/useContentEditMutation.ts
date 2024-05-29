import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from './instance';
import { CardResult } from '../type/card';

// 글 수정 완료 후 제출 시 PATCH mutation hook
const useContentEditMutation = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newData: CardResult) => {
      // patch 사용
      const response = await instance.patch(`result/${id}`, newData);
      return response.data;
    },

    // mutation이 성공했을 때
    onSuccess: () => {
      console.log('editCompleteMutation success!');

      queryClient.invalidateQueries({ queryKey: ['fetchFeedData'] }); // 수정이 성공하면 쿼리를 다시 가져옴
    },
  });

  return mutation;
};

export default useContentEditMutation;
