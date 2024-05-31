// 미션: 글 삭제 시 DELETE mutation hook 구현하기

// 삭제 버튼을 눌렀을 때 mutation
// 삭제 버튼을 눌렀을 때 -> 삭제 버튼 누르고 useNavigate 사용해서 board로 이동
// 1. apis/useContentDeleteMutation.ts 구현
// 2. pages/Content.tsx에서 handleContentDeleteClick 구현
// 3. organisms/ContentView.tsx도 코드 추가
// apis/useContentDeleteMutation.ts
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteContent = async (contentId: string) => {
  const response = await axios.delete(`/api/content/${contentId}`);
  return response.data;
};

const useContentDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteContent, {
    onSuccess: () => {
      queryClient.invalidateQueries('contentList'); // 삭제 후 콘텐츠 목록 갱신
    },
  });
};

export default useContentDeleteMutation;
