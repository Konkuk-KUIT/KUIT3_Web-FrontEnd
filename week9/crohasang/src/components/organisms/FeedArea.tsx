import { useNavigate } from 'react-router-dom';
import { CardResult } from '../../type/card';
import BoardCard from './BoardCard';

interface Props {
  feedsData: CardResult[];
}

const FeedArea: React.FC<Props> = ({ feedsData }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center gap-y-5 my-20">
        {feedsData && feedsData.length > 0 ? (
          feedsData.map((value: CardResult, index: number) => (
            <BoardCard
              key={index}
              title={value.title}
              time={value.time}
              commentNum={value.commentCount}
              author={value.author}
              likes={value.likeCount}
              onClick={() => navigate(`/content/${value.id}`)}
            />
          ))
        ) : (
          <div
            className="font-pretendard flex h-full text-zinc-700 dark:text-white flex-grow"
            style={{ height: '500px' }}
          >
            <div className="flex justify-center items-center">
              아직 글이 없습니다.
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FeedArea;
