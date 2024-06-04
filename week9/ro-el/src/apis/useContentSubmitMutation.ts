import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardResult } from '../type/card';
import instance from './instance';

// 글 작성 POST hook
const useContentSubmitMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({ //GET을 제외하고는 useMutation 사용
    mutationFn: async (newData: CardResult) => {
      return await instance.post('/result', newData);
    },
    onSuccess: () => {
      // 쿼리를 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['fetchFeedsData'] });
    },
  });

  return mutation;
};

export default useContentSubmitMutation;
