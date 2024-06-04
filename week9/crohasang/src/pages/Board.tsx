import BoardIntroduce from '../components/organisms/BoardIntroduce';
import BoardFilterLine from '../components/organisms/BoardFilterLine';
import DarkModeToggle from '../components/atoms/DarkModeToggle';
import Loading from './Loading';
import SearchHeader from '../components/organisms/Appbar';
import { useFeedsDataQuery } from '../apis/fetchFeedsData';
import FeedArea from '../components/organisms/FeedArea';
import ScrollToTop from './../components/atoms/ScrollToTop';

const Board = () => {
  // GET
  const { feedsData, isFeedsDataLoading } = useFeedsDataQuery();

  // 데이터가 로딩 중이면 <Loading /> 리턴
  if (isFeedsDataLoading) {
    return <Loading />;
  }

  return (
    <div className="font-pretendard min-h-screen w-screen bg-white dark:bg-zinc-700 flex flex-col">
      <SearchHeader />
      <div className="h-64  flex-shrink-0">
        <BoardIntroduce />
      </div>
      <div className="px-8">
        <div>
          <BoardFilterLine />
        </div>
        <hr className="border-gray-300 dark:border-white" />

        {/* feedsData를 FeedArea에 전달 */}
        {feedsData !== undefined && <FeedArea feedsData={feedsData} />}
      </div>
      <DarkModeToggle />
      <ScrollToTop />
    </div>
  );
};

export default Board;
