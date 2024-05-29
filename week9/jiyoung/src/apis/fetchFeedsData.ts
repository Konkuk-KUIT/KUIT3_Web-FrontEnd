// 데이터 조회 API 함수들, GET 함수들

import instance from './instance';
import { CardResult } from '../type/card';
import { useQuery } from '@tanstack/react-query';

// 피드들의 데이터 조회 API
export const fetchFeedsData = async () => {
  const response = await instance.get<CardResult[]>('/result');
  console.log(response);
  return response.data;
};

// 특정 피드의 데이터 조회 API
export const fetchFeedData = async (id: string) => {
  const response = await instance.get<CardResult>(`/result/${id}`);
  console.log(response);
  return response.data;
};

// 피드들의 데이터 GET
export const useFeedsDataQuery = () => {
  const { data: feedsData, isLoading: isFeedsDataLoading } = useQuery({
    // queryKey => 캐시에서 데이터를 찾는 데 사용됨
    // 같은 queryKey를 가지고 있으면 같은 캐시 데이터를 공유
    // queryKey가 변경될 때마다 refetching이 일어남
    queryKey: ['fetchFeedsData'],

    // 쿼리 함수를 설정. 이 함수는 API 호출을 담당하며, 여기서는 fetchFeedsData 함수를 호출
    queryFn: () => fetchFeedsData(),
  });

  return { feedsData, isFeedsDataLoading };
};

// 특정 피드의 데이터 GET
export const useFeedDataQuery = (feedId: string) => {
  const { data: feedData, isLoading: isFeedDataLoading } = useQuery({
    queryKey: ['fetchFeedData', feedId],
    queryFn: () => fetchFeedData(feedId),
  });

  return { feedData, isFeedDataLoading };
};
