import { useNavigate } from 'react-router-dom';

import { ReactComponent as PencilSquareIcon } from '../../assets/icons/pencilSquare.svg';
import useStore from '../../store/useDarkModeStore';

const WriteBtn = () => {
  // 다크모드
  const darkMode = useStore((state) => state.darkMode);

  const navigate = useNavigate();

  return (
    <button
      className="bg-transparent flex items-center gap-x-2"
      onClick={() => navigate('/write')}
    >
      <PencilSquareIcon
        height={16}
        width={16}
        stroke={darkMode ? 'white' : 'black'}
      />
      <div className="font-pretendard text-bold text-black dark:text-white ">
        글쓰기
      </div>
    </button>
  );
};

export default WriteBtn;
