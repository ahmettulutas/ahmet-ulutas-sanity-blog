export const ActionTypes = {
  toggle: 'TOGGLE',
} as const;

export type GetValues<T> = T[keyof T];
export type DefinedAction = {
  type: GetValues<typeof ActionTypes>;
  payload: boolean;
};

export type ThemeState = {
  darkMode: boolean;
};

export const initialThemeState: ThemeState = {
  darkMode: false,
};

export const themeReducer = (state: ThemeState, action: DefinedAction) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};
