// 1초 뒤에 나타나는 애니메이션 훅

import { useEffect, useState } from 'react';

export const useFadeIn = (
  initialOpacity = 0,
  targetOpacity = 1,
  duration = 1000
) => {
  const [opacity, setOpacity] = useState(initialOpacity);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(targetOpacity);
    }, duration);
    return () => clearTimeout(timer);
  }, [targetOpacity, duration]);

  return opacity;
};
