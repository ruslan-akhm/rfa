import { LOGIN, LOGIN_SUCCESS, WELCOME } from "../actions/types";

export const initialState = {
  isAuthenticated: false,
  loading: false,
  welcome: false,
  profile: null,
  taxReturns: null,
  milestones: null,
  notifications: null,
};

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return { ...state, loading: true };

    case WELCOME:
      return {
        ...state,
        loading: false,
        welcome: true,
        profile: payload.profile,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        welcome: false,
        isAuthenticated: true,
        taxReturns: payload.taxReturns,
        milestones: payload.milestones,
        notifications: payload.notifications,
      };

    default:
      return state;
  }
};
