// 미션: 글 삭제 시 DELETE mutation hook 구현하기
import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "./instance";

// 삭제 버튼을 눌렀을 때 mutation
// 삭제 버튼을 눌렀을 때 -> 삭제 버튼 누르고 useNavigate 사용해서 board로 이동
// 1. apis/useContentDeleteMutation.ts 구현
// 2. pages/Content.tsx에서 handleContentDeleteClick 구현
// 3. organisms/ContentView.tsx도 코드 추가

// 글 삭제 시 DELETE hook
const useContentDeleteMutation = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      return await instance.delete(`result/${id}`);
    },
    onSuccess: () => {
      console.log("Delete 요청 성공!!");
      queryClient.invalidateQueries({ queryKey: ["fetchFeedsData"] });
    },
  });

  return mutation;
};

export default useContentDeleteMutation;
