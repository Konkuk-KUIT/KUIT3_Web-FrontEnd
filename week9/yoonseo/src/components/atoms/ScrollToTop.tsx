import React from 'react';
import useStore from '../../store/useDarkModeStore';
import { ReactComponent as TopButtonIcon } from '../../assets/icons/topChevronDouble.svg';

const ScrollToTop = () => {
  const darkMode = useStore((state) => state.darkMode);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div
      className="fixed bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 
        bg-zinc-700 dark:bg-white"
      onClick={scrollToTop}
    >
      <TopButtonIcon
        height={30}
        width={30}
        stroke={darkMode ? 'gray' : 'white'}
      />
    </div>
  );
};

export default ScrollToTop;
