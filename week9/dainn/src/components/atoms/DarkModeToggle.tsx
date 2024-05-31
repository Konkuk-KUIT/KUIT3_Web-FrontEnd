import React from 'react';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/darkMode.svg';
import useStore from '../../store/useDarkModeStore';

const DarkModeToggle = () => {
  const darkMode = useStore((state) => state.darkMode);
  const setDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <div
      className="fixed bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 
        bg-zinc-700 dark:bg-white"
      onClick={setDarkMode}
    >
      <DarkModeIcon
        height={30}
        width={30}
        stroke={darkMode ? 'gray' : 'white'}
      />
    </div>
  );
};

export default DarkModeToggle;
