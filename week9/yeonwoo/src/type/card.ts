export type CardResult = {
  id: string;
  title: string;
  body: string;
  time: string;
  commentCount: number;
  author: string;
  likeCount: number;
};

// endpoint가 /result가 되었으므로 CareResponse는 더 이상 사용하지 않음
export type CardResponse = {
  code: number;
  status: number;
  message: string;
  result: CardResult;
  messages: string;
  totalPages: number;
};
