import {
  LanguageKey,
  LayoutDirection,
  PageFit,
  PageView,
} from '../../models/types';

export const SET_CHAPTER_LANGUAGES = 'SET_CHAPTER_LANGUAGES';
export const SET_PAGE_FIT = 'SET_PAGE_FIT';
export const TOGGLE_PAGE_FIT = 'TOGGLE_PAGE_FIT';
export const SET_PAGE_VIEW = 'SET_PAGE_VIEW';
export const TOGGLE_PAGE_VIEW = 'TOGGLE_PAGE_VIEW';
export const SET_LAYOUT_DIRECTION = 'SET_LAYOUT_DIRECTION';
export const TOGGLE_LAYOUT_DIRECTION = 'TOGGLE_LAYOUT_DIRECTION';
export const SET_PRELOAD_AMOUNT = 'SET_PRELOAD_AMOUNT';
export const SET_REFRESH_ON_START = 'SET_REFRESH_ON_START';

export interface SettingsState {
  chapterLanguages: LanguageKey[];
  refreshOnStart: boolean;
  pageFit: PageFit;
  pageView: PageView;
  layoutDirection: LayoutDirection;
  preloadAmount: number;
}

interface SetChapterLanguagesAction {
  type: typeof SET_CHAPTER_LANGUAGES;
  payload: {
    chapterLanguages: LanguageKey[];
  };
}

interface SetPageFitAction {
  type: typeof SET_PAGE_FIT;
  payload: {
    pageFit: PageFit;
  };
}

interface TogglePageFitAction {
  type: typeof TOGGLE_PAGE_FIT;
}

interface SetPageViewAction {
  type: typeof SET_PAGE_VIEW;
  payload: {
    pageView: PageView;
  };
}

interface TogglePageViewAction {
  type: typeof TOGGLE_PAGE_VIEW;
}

interface SetLayoutDirectionAction {
  type: typeof SET_LAYOUT_DIRECTION;
  payload: {
    layoutDirection: LayoutDirection;
  };
}

interface ToggleLayoutDirectionAction {
  type: typeof TOGGLE_LAYOUT_DIRECTION;
}

interface SetPreloadAmountAction {
  type: typeof SET_PRELOAD_AMOUNT;
  payload: {
    preloadAmount: number;
  };
}

interface SetRefreshOnStartAction {
  type: typeof SET_REFRESH_ON_START;
  payload: {
    refreshOnStart: boolean;
  };
}

export type SettingsAction =
  | SetChapterLanguagesAction
  | SetPageFitAction
  | TogglePageFitAction
  | SetPageViewAction
  | TogglePageViewAction
  | SetLayoutDirectionAction
  | ToggleLayoutDirectionAction
  | SetPreloadAmountAction
  | SetRefreshOnStartAction;