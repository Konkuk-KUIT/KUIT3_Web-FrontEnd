// 글 작성 후 제출 시 POST mutation hook

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CardResult } from '../type/card';
import instance from './instance';

// 글 작성 POST hook
const useContentSubmitMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
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
