import { create } from 'zustand';

export interface State {
  darkMode: boolean;
  toggleDarkMode: () => void;

  // 9주차 미션에서 로그인은 구현x

  // accessToken: string;
  // setAccessToken: (token: string) => void;
  // logOut: () => void;

  // isLoggedIn: boolean;
}

const useStore = create<State>((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return { darkMode: newDarkMode };
    }),

  // 9주차 미션에서 로그인은 구현x
  // // access Token
  // accessToken: '',

  // // access Token 저장
  // setAccessToken: (token: string) =>
  //   set({ accessToken: token, isLoggedIn: !!token }),

  // // 로그아웃
  // logOut: () => set({ accessToken: '', isLoggedIn: false }),

  // // 로그인 상태
  // isLoggedIn: false,
}));

export default useStore;
