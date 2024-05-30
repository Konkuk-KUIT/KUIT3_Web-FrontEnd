export const DARK_MODE = 'DARK_MODE';

export interface DarkModeAction {
  type: typeof DARK_MODE;
  payload: boolean;
}

export const setDarkMode = (mode: boolean): DarkModeAction => ({
  type: DARK_MODE,
  payload: mode,
});
